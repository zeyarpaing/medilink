'use client';

import { Button as $Button, ButtonProps } from '@nextui-org/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ButtonProps & {
  isLink?: boolean;
};

export default function Button({ children, className, isLink, ...props }: Props) {
  return (
    <$Button
      as={isLink ? Link : undefined}
      className={twMerge(' w-full text-sm hover:opacity-90 sm:w-fit', className)}
      color="primary"
      size="md"
      {...props}
    >
      {children}
    </$Button>
  );
}
