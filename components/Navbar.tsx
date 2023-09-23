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
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { sitemap } from '@/lib/constants';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  sitemap.healthProviders,
  sitemap.services,
  sitemap.about,
  sitemap.contact,
  sitemap['sign-up'],
  sitemap.login,
];

const menuItems = navigation;

function isActive(href: string) {
  return href === (typeof window !== 'undefined' ? window.location.pathname : '');
}

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
              triggerScaleOnOpen={false}
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
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="py-6">
        {menuItems.map((item, index) =>
          item.children ? (
            <Dropdown triggerScaleOnOpen={false} placement="bottom-start" className="w-full" key={item.label} size="lg">
              <NavbarItem>
                <DropdownTrigger>
                  <button className="w-full px-4 py-2 text-left" type="button">
                    {item.label}
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
}
