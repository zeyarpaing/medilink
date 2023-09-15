import { Manrope } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';

const inter = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Healthcare with ease for everyone',
  title: 'medilink',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
