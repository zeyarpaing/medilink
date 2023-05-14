import Link from 'next/link';
import './globals.css';
import { Inter, Nabla } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'medilink',
  description: 'Healthcare with ease for everyone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav>
      <Link href="/">medilink</Link>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2021 medilink</p>
    </footer>
  );
}
