import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  description: 'override description',
  title: 'override',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <>
      <Navbar session={session} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
