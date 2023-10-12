'use client';

import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import { sitemap } from '@/lib/constants';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import {
  Navbar as $Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Navbar({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname.includes(href);
  }

  const navigation = session?.user
    ? [sitemap.healthProviders, sitemap.faq, sitemap.contact]
    : [sitemap.healthProviders, sitemap.faq, sitemap.contact, sitemap['sign-up'], sitemap.login];

  return (
    <$Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image alt="logo" height={50} src="/logo.svg" width={150} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden justify-between gap-4 sm:flex">
        <NavbarBrand>
          <Link href="/">
            <Image alt="logo" height={50} src="/logo.svg" width={150} />
          </Link>
        </NavbarBrand>
        {navigation.map((item) =>
          item.children ? (
            <Dropdown
              isOpen={openedDropdown === item.href}
              key={item.label}
              onMouseLeave={() => {
                setOpenedDropdown('');
              }}
              onOpenChange={(isOpen) => {
                setOpenedDropdown(isOpen ? item.href : '');
              }}
              triggerScaleOnOpen={false}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 font-medium ${
                      isActive(item.href) ? 'text-primary' : ''
                    }`}
                    onMouseEnter={() => {
                      setOpenedDropdown(item.href);
                    }}
                    type="button"
                  >
                    {item.label}{' '}
                    <ChevronDownIcon
                      className={`mt-0.5 h-4 w-4 transition-transform ${
                        openedDropdown === item.href ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={item.label}
                className="w-[250px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                {
                  Object.values(item.children).map((child) => (
                    <DropdownItem key={child.href} onClick={() => router.push(child.href)}>
                      {child.label}
                    </DropdownItem>
                  )) as any
                }
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem
              className="font-medium  data-[active=true]:text-primary"
              isActive={isActive(item.href)}
              key={item.label}
            >
              {item.type === 'button' ? (
                <Button as={'a'} color="primary" href={item.href} variant={item.featured ? 'solid' : 'bordered'}>
                  {item.label}
                </Button>
              ) : (
                <Link className="px-4 py-2" href={item.href}>
                  {item.label}
                </Link>
              )}
            </NavbarItem>
          )
        )}
        {!!session?.user ? (
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
                  {/* <ChevronDownIcon
                    className={`mt-0.5 h-4 w-4 transition-transform ${
                      openedDropdown === 'account' ? 'rotate-180' : 'rotate-0'
                    }`}
                  /> */}
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
              <DropdownItem onClick={() => router.push('/account')}>Account</DropdownItem>
              <DropdownItem className="text-danger" color="danger" onClick={() => signOut()}>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          ''
        )}
      </NavbarContent>
      <MobileNav isMenuOpen={isMenuOpen} navigation={navigation} setMenuOpen={setIsMenuOpen} />
    </$Navbar>
  );
}

function MobileNav({
  isMenuOpen,
  navigation,
  setMenuOpen,
}: {
  isMenuOpen: boolean;
  navigation: (typeof sitemap)['string'][];
  setMenuOpen: (isOpen: boolean) => void;
}) {
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="py-6">
        {navigation.map((item, index) =>
          item.children ? (
            <Dropdown
              className="w-full"
              key={item.label}
              onOpenChange={(isOpen) => {
                setOpenedDropdown(isOpen ? item.href : '');
              }}
              placement="bottom-start"
              size="lg"
              triggerScaleOnOpen={false}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <button className="flex w-full items-center justify-between gap-2 px-4 py-2 text-left" type="button">
                    {item.label}{' '}
                    <ChevronDownIcon
                      className={`mt-0.5 h-4 w-4 transition-transform ${
                        openedDropdown === item.href ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label=""
                className="block w-[88vw]"
                itemClasses={{
                  base: 'gap-4 w-full',
                }}
              >
                {
                  Object.values(item.children).map((child) => (
                    <DropdownItem key={child.label} onClick={() => router.push(child.href)}>
                      {child.label}
                    </DropdownItem>
                  )) as any
                }
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="block w-full px-4 py-2.5 text-base"
                color={index === 2 ? 'warning' : index === navigation.length - 1 ? 'danger' : 'foreground'}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </>
  );
}
