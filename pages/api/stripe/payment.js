import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
   if (req.method === "POST") {
      try {
         const prices = await stripe.prices.list({ active: true, limit: 1 })
         const { origin } = req.headers

         const { userId } = req.body
         const paymentLink = await stripe.paymentLinks.create({
            line_items: [{ price: prices.data[0].id, quantity: 1 }],
            after_completion: { type: "redirect", redirect: { url: origin } },
            allow_promotion_codes: true,
            automatic_tax: { enabled: true },
            metadata: { userId: userId },
         })

         res.status(200).send(paymentLink.url)
      } catch (err) {
         res.status(500).json({ statusCode: 500, message: err.message })
      }
   } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
   }
}
