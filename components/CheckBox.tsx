import { Checkbox, CheckboxProps } from '@nextui-org/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function CheckBox({ className, ...props }: CheckboxProps) {
  return (
    <Checkbox
      className={twMerge(
        '[&>span>svg]:scale-80 [&>span[aria-hidden=true]]:border-2 [&>span[aria-hidden=true]]:text-white [&>span[aria-hidden=true]]:data-[selected=true]:border-white [&_svg_polyline]:stroke-[3]',
        className
      )}
      color="primary"
      radius="full"
      size="lg"
      {...props}
    />
  );
}
