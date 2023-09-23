import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'override description',
  title: 'override',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="mcontainer">
      <p>© 2023 medilink</p>
    </footer>
  );
}
