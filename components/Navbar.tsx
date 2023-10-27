'use client';

import { useTheme } from '@/app/providers';
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import Button from '@/components/Button';
import { sitemap } from '@/lib/constants';
import { openModal } from '@/lib/utils';
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
import { Avatar, Checkbox, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function AccountDropdown() {
  const { data: session } = useSession();
  const router = useRouter();
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <>
      {!!session?.user && (
        <Dropdown backdrop="opaque" className="w-full" placement="bottom-end" size="lg">
          <NavbarItem>
            <DropdownTrigger>
              <button
                className="flex w-full items-center justify-center  gap-2 rounded-full border border-foreground/30 py-2 pl-3 pr-4 text-left"
                type="button"
              >
                <div className="h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8" name={session?.user.name} src={session?.user.image} />
                </div>
                <p className="text-sm">{session?.user?.name}</p>
              </button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label=""
            className="block w-[calc(100vw-10rem)] sm:w-[300px]"
            itemClasses={{
              base: 'gap-4 w-full',
              title: 'text-lg sm:text-base',
            }}
          >
            <DropdownItem onPress={() => setTimeout(() => router.push(sitemap.profile.href), 500)}>
              {sitemap.profile.label}
            </DropdownItem>
            <DropdownItem
              className="text-danger"
              color="danger"
              onPress={() => {
                openModal({
                  content: 'Are you sure you want to log out?',
                  onProceed: () => signOut(),
                  size: 'sm',
                  title: 'Log out',
                });
              }}
            >
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
      <Dropdown className="w-full" placement="bottom-end" size="lg">
        <NavbarItem>
          <DropdownTrigger>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-full border border-foreground/30 p-2 text-foreground/80"
              type="button"
            >
              <svg height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428l-.781 1.428Zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842ZM2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12Zm18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914l.914-1.67Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label=""
          className="block w-[calc(100vw-10rem)] sm:w-[300px]"
          itemClasses={{
            base: 'gap-4 w-full',
            title: 'text-lg sm:text-base',
          }}
        >
          {(['light', 'dark', 'system'] as const).map((theme) => (
            <DropdownItem key={theme} onClick={() => setColorScheme(theme)}>
              <div className="flex items-center justify-between capitalize">
                {theme}
                {theme === colorScheme && <Checkbox color="default" isSelected />}
              </div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default function Navbar({ isApp }: { isApp?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  function isActive(href: string) {
    return pathname.includes(href);
  }

  const navigation = session?.user
    ? isApp
      ? [sitemap.healthProviders, sitemap.faq, sitemap.contact]
      : session.user.role === 'USER'
      ? [sitemap.healthProviders, sitemap.faq, sitemap.contact, sitemap.myBooking]
      : [sitemap.healthProviders, sitemap.faq, sitemap.contact, sitemap.dashboard]
    : [sitemap.healthProviders, sitemap.faq, sitemap.contact, sitemap['register'], sitemap.login];

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
          'children' in item && item.children ? (
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
              {'type' in item && item.type === 'button' ? (
                <Button
                  color="primary"
                  href={item.href}
                  isLink
                  variant={'featured' in item && item.featured ? 'solid' : 'bordered'}
                >
                  {item.label}
                </Button>
              ) : (
                <Link className="px-4 py-2" href={item.href}>
                  {item.label}
                </Link>
              )}
            </NavbarItem>
          ),
        )}
        <AccountDropdown />
        {status === 'loading' && <Spinner />}
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
  navigation: (typeof sitemap)[keyof typeof sitemap][];
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
        <AccountDropdown />
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="py-6">
        {navigation.map((item, index) =>
          'children' in item && item.children ? (
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
                {'children' in item
                  ? (Object.values(item.children).map((child) => (
                      <DropdownItem key={child.label} onClick={() => router.push(child.href)}>
                        {child.label}
                      </DropdownItem>
                    )) as any)
                  : ''}
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
          ),
        )}
      </NavbarMenu>
    </>
  );
}
