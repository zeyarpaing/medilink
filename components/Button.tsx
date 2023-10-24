'use client';

import { Button as $Button, ButtonProps } from '@nextui-org/react';
import Link from 'next/link';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ButtonProps & {
  isLink?: boolean;
};

const Button = forwardRef(function Button({ children, className, isLink, ref, ...props }: Props) {
  return (
    <$Button
      as={isLink ? Link : undefined}
      className={twMerge(
        `w-full text-sm hover:opacity-90 sm:w-fit ${
          props.type === 'submit' ? 'h-10 text-base font-semibold sm:w-full' : ''
        }`,
        className
      )}
      color="primary"
      isDisabled={props.disabled}
      ref={ref}
      size="md"
      {...props}
    >
      {children}
    </$Button>
  );
});

export default Button;
