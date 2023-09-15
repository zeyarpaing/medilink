import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'override description',
  title: 'override',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-red-300">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <Link href="/">medilink</Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
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
