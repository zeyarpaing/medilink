'use client';

import {
  Navbar as $Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
} from '@nextui-org/navbar';
import { DropdownTrigger, DropdownMenu, DropdownItem, Dropdown } from '@nextui-org/dropdown';
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { sitemap } from '@/lib/constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

function isActive(href: string) {
  return href === (typeof window !== 'undefined' ? window.location.pathname : '');
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();
  const [navigation, setNavigation] = useState([
    sitemap.healthProviders,
    sitemap.services,
    sitemap.about,
    sitemap.contact,
    sitemap['sign-up'],
    sitemap.login,
  ]);

  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      setNavigation([sitemap.healthProviders, sitemap.services, sitemap.about, sitemap.contact]);
    } else {
      setNavigation([
        sitemap.healthProviders,
        sitemap.services,
        sitemap.about,
        sitemap.contact,
        sitemap['sign-up'],
        sitemap.login,
      ]);
    }
  }, [status]);

  return (
    <$Navbar
      onMenuOpenChange={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
      isMenuOpen={isMenuOpen}
      isBordered
    >
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.svg" height={50} width={150} alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden justify-between gap-4 sm:flex">
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.svg" height={50} width={150} alt="logo" />
          </Link>
        </NavbarBrand>
        {navigation.map((item) =>
          item.children ? (
            <Dropdown
              onOpenChange={(isOpen) => {
                setOpenedDropdown(isOpen ? item.href : '');
              }}
              onMouseLeave={() => {
                setOpenedDropdown('');
              }}
              isOpen={openedDropdown === item.href}
              triggerScaleOnOpen={false}
              key={item.label}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <button
                    onMouseEnter={() => {
                      setOpenedDropdown(item.href);
                    }}
                    className="flex items-center gap-2 px-4 py-2"
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
                itemClasses={{
                  base: 'gap-4',
                }}
                aria-label={item.label}
                className="w-[200px]"
              >
                {
                  Object.values(item.children).map((child) => (
                    <DropdownItem onClick={() => router.push(child.href)} key={child.href}>
                      {child.label}
                    </DropdownItem>
                  )) as any
                }
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.label}>
              {item.type === 'button' ? (
                <Button variant={item.featured ? 'solid' : 'bordered'} href={item.href} color="primary" as={'a'}>
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
        {status === 'authenticated' ? (
          <Dropdown triggerScaleOnOpen={false} placement="bottom-end" className="w-full" size="lg">
            <NavbarItem>
              <DropdownTrigger>
                <button
                  className="flex w-full items-center justify-center  gap-2 rounded-full border py-2 pl-3 pr-4 text-left"
                  type="button"
                >
                  <div className="h-8 w-8 rounded-full">
                    <Image
                      src={
                        data.user?.image ||
                        'https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1696934508~exp=1696938108~hmac=444e2593a42602e3dc5bea7fb3bc132a8b49248d13fd6ee0e235376235fa81c5&w=900'
                      }
                      className="h-full w-full rounded-full bg-gray-600 object-cover"
                      height={30}
                      width={30}
                      alt="avatar"
                    />
                  </div>
                  <p className="text-sm">{data.user?.name}</p>
                  {/* <ChevronDownIcon
                    className={`mt-0.5 h-4 w-4 transition-transform ${
                      openedDropdown === 'account' ? 'rotate-180' : 'rotate-0'
                    }`}
                  /> */}
                </button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              itemClasses={{
                base: 'gap-4 w-full',
              }}
              className="block w-[300px]"
              aria-label=""
            >
              <DropdownItem onClick={() => router.push('/account')}>Account</DropdownItem>
              <DropdownItem color="danger" className="text-danger" onClick={() => signOut()}>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          ''
        )}
      </NavbarContent>
      <MobileNav isMenuOpen={isMenuOpen} navigation={navigation} />
    </$Navbar>
  );
}

function MobileNav({ isMenuOpen, navigation }: { isMenuOpen: boolean; navigation: (typeof sitemap)['string'][] }) {
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();

  return (
    <>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="py-6">
        {navigation.map((item, index) =>
          item.children ? (
            <Dropdown
              onOpenChange={(isOpen) => {
                setOpenedDropdown(isOpen ? item.href : '');
              }}
              triggerScaleOnOpen={false}
              placement="bottom-start"
              className="w-full"
              key={item.label}
              size="lg"
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
                itemClasses={{
                  base: 'gap-4 w-full',
                }}
                className="block w-[88vw]"
                aria-label=""
              >
                {
                  Object.values(item.children).map((child) => (
                    <DropdownItem onClick={() => router.push(child.href)} key={child.label}>
                      {child.label}
                    </DropdownItem>
                  )) as any
                }
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? 'warning' : index === navigation.length - 1 ? 'danger' : 'foreground'}
                className="block w-full px-4 py-2.5 text-base"
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
