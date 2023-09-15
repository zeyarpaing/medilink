import { ButtonGroup, Button } from '@nextui-org/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'override description',
  title: 'override',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ButtonGroup color="primary">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      <Footer />
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
      <p>© 2023 medilink</p>
    </footer>
  );
}
