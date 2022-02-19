import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { buffer } from "micro"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
   apiVersion: "2020-08-27",
})
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
   api: {
      bodyParser: false,
   },
}

export default async function handler(req, res) {
   if (req.method === "POST") {
      const buf = await buffer(req)
      const sig = req.headers["stripe-signature"]
      const db = getFirestore()

      let event

      try {
         event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
      } catch (err) {
         res.status(400).send(`Webhook Error: ${err.message}`)
         return
      }

      if (event.type === "checkout.session.completed") {
         const userRef = doc(db, "users", event.data.object.metadata.userId)
         await stripe.subscriptions.update(event.data.object.subscription, {
            metadata: { userId: event.data.object.metadata.userId },
         })
         await stripe.customers.update(event.data.object.customer, {
            metadata: { userId: event.data.object.metadata.userId },
         })

         await updateDoc(userRef, { premium: true, stripeId: event.data.object.customer })
      } else if (event.type === "customer.subscription.deleted") {
         const userRef = doc(db, "users", event.data.object.metadata.userId)

         await updateDoc(userRef, { premium: false })
      } else {
         console.warn("Unhandled event: " + event.type)
      }

      res.json({ received: true })
   } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
   }
}
