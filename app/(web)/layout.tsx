import { ButtonGroup, Button } from '@nextui-org/button';
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
      <ButtonGroup color="primary">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 medilink</p>
    </footer>
  );
}
