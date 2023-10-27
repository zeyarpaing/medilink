'use client';

import { useTheme } from '@/app/providers';
import CheckoutForm from '@/components/form/CheckoutForm.jsx';
import { Schedule } from '@prisma/client';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Payment({ schedule }: { schedule: Schedule }) {
  const [clientSecret, setClientSecret] = React.useState('');
  const { getColorClass } = useTheme();

  React.useEffect(() => {
    fetch('/api/payment/create-payment-intent', {
      body: JSON.stringify({ scheduleId: schedule.id, bookingPrice: schedule.bookingPrice }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log('err', err));
  }, []);

  const options: StripeElementsOptions = {
    appearance: {
      theme: getColorClass() === 'dark' ? 'night' : 'stripe',
    },
    clientSecret,
  };

  return (
    <div className="App">
      {clientSecret && (
        // @ts-expect-error stripePromise is not null
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm price={schedule.bookingPrice} />
        </Elements>
      )}
    </div>
  );
}
