import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
   if (req.method === "POST") {
      const { stripeId } = req.body
      const { origin } = req.headers
      const customer = await stripe.customers.retrieve(stripeId)

      try {
         const billingPortal = await stripe.billingPortal.sessions.create({
            customer: customer.id,
            return_url: origin,
         })
        res.status(200).send(billingPortal.url)
      } catch (err) {
         res.status(500).json({ statusCode: 500, message: err.message })
      }
   } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
   }
}
