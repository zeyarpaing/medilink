const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: data?.bookingPrice * 100,
    automatic_payment_methods: {
      enabled: true,
    },
    currency: 'usd',
  });

  const cs = paymentIntent.client_secret;
  return Response.json({
    clientSecret: cs,
  });
}
