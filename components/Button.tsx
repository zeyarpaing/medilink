'use client';

import { Button as $Button, ButtonProps } from '@nextui-org/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ButtonProps & {
  isLink?: boolean;
};

export default function Button({ children, className, href, isLink, ...props }: Props) {
  return (
    <$Button
      className={twMerge(' w-full px-8 text-sm hover:opacity-90 sm:w-fit', className)}
      color="primary"
      size="md"
      {...props}
    >
      {isLink ? <Link href={href!}>{children}</Link> : children}
    </$Button>
  );
}
