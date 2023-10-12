import Footer from '@/components/Footer';
import Navbar, { AccountDropdownItems } from '@/components/Navbar';
import { sitemap } from '@/lib/constants';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { NavbarItem } from '@nextui-org/navbar';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <>
      <Navbar session={session}>
        <AccountDropdown session={session} />
      </Navbar>
      <main>{children}</main>
      <Footer />
    </>
  );
}

function AccountDropdown({ session }: { session: any }) {
  return (
    <>
      {!!session?.user && (
        <Dropdown className="w-full" placement="bottom-end" size="lg">
          <NavbarItem>
            <DropdownTrigger>
              <button
                className="flex w-full items-center justify-center  gap-2 rounded-full border py-2 pl-3 pr-4 text-left"
                type="button"
              >
                <div className="h-8 w-8 rounded-full">
                  <Image
                    alt="avatar"
                    className="h-full w-full rounded-full bg-gray-600 object-cover"
                    height={30}
                    src={
                      session?.user?.image ||
                      'https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1696934508~exp=1696938108~hmac=444e2593a42602e3dc5bea7fb3bc132a8b49248d13fd6ee0e235376235fa81c5&w=900'
                    }
                    width={30}
                  />
                </div>
                <p className="text-sm">{session?.user?.name}</p>
              </button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label=""
            className="block w-[300px]"
            itemClasses={{
              base: 'gap-4 w-full',
            }}
          >
            <AccountDropdownItems />
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
}
