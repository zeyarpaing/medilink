import { Providers } from '@/app/providers';
import { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { twJoin } from 'tailwind-merge';

import './globals.css';

const inter = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Healthcare with ease for everyone',
  title: 'medilink',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twJoin(inter.className, 'bg-background text-foreground')}>
        <Providers>{children}</Providers>
        <Script id="stripe">
          {`
          const stripe = Stripe('pk_test_51NzeiKDNFrhDsjQpIA7jelmTRIKMZbKkurcJ3RiprkuLakMo0XuRMJ5AmPSDZWr3HzBx7yNyaCBYaxHefntXuljp00pOqSTNqU');

          const appearance = { /* appearance */ };
          const options = { /* options */ };
          const elements = stripe.elements({ clientSecret, appearance });
          const paymentElement = elements.create('payment', options);
          paymentElement.mount('#payment-element');
          `}
        </Script>
      </body>
    </html>
  );
}
