// This is your test secret API key.
const stripe = require('stripe')(
 process.env.STRIPE_SECRET_KEY 
);

async function handler(req: Request) {
  // const { items } = await req.json();
  // console.log('item : ', items);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500, // calculateOrderAmount(),
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
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

export { handler as POST };
