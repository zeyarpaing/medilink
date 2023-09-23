'use client';

import {
  Navbar as $Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
} from '@nextui-org/navbar';
import { DropdownTrigger, DropdownItem, DropdownMenu, Dropdown } from '@nextui-org/dropdown';
import { Link as $Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { debounce } from '@/lib/utils';
import State from '@/components/State';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sitemap: Record<
  string,
  {
    children?: Record<string, { label: string; href: string }>;
    featured?: boolean;
    type?: 'button';
    label: string;
    href: string;
  }
> = {
  healthProviders: {
    children: {
      hospitals: {
        href: '/hospitals',
        label: 'Hospitals',
      },
      clinics: {
        href: '/clinics',
        label: 'Clinics',
      },
    },
    label: 'Healthcare providers',
    href: '/healthcare-providers',
  },
  services: {
    children: {
      providers: {
        href: '/providers',
        label: 'Providers',
      },
      patients: {
        href: '/patients',
        label: 'Patients',
      },
    },
    label: 'Services',
    href: '/services',
  },
  login: {
    featured: true,
    type: 'button',
    label: 'Login',
    href: '/login',
  },
  'sign-up': {
    href: '/sign-up',
    label: 'Sign up',
    type: 'button',
  },
  contact: {
    href: '/contact',
    label: 'Contact',
  },
  about: {
    href: '/about',
    label: 'About',
  },
  home: {
    label: 'Home',
    href: '/',
  },
};

const navigation = [
  sitemap.healthProviders,
  sitemap.services,
  sitemap.about,
  sitemap.contact,
  sitemap['sign-up'],
  sitemap.login,
];
const menuItems = navigation;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();

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
              key={item.label}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <button
                    onMouseEnter={() => {
                      setOpenedDropdown(item.href);
                    }}
                    className="px-4 py-2"
                    type="button"
                  >
                    {item.label}
                  </button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                itemClasses={{
                  base: 'gap-4',
                }}
                aria-label="ACME features"
                className="w-[340px]"
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
            <NavbarItem isActive={item.href === window.location.pathname} key={item.label}>
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
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="py-6">
        {menuItems.map((item, index) =>
          item.children ? (
            <Dropdown key={item.label}>
              <NavbarItem>
                <DropdownTrigger>
                  <button className="w-full px-4 py-2 text-left" type="button">
                    {item.label}
                  </button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                itemClasses={{
                  base: 'gap-4',
                }}
                aria-label="ACME features"
                className="w-[340px]"
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
                color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
                className="block w-full px-4 py-2.5 text-base"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </$Navbar>
  );
  return (
    <header className="border-b">
      <nav className="mcontainer flex items-center justify-between py-3 ">
        <Link className="py-3" href="/">
          <Image src="/logo.svg" height={50} width={150} alt="logo" />
        </Link>
        <ul className="flex gap-2 [&_a]:px-4 [&_a]:py-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link className="text-sm" href={item.href}>
                {item.label}
              </Link>
              {/* {item.children && (
                  <ul className="absolute bg-white shadow-md">
                    {Object.values(item.children).map((child) => (
                      <li key={child.label}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )} */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
