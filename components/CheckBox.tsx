import { Checkbox, CheckboxProps } from '@nextui-org/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function CheckBox({ className, ...props }: CheckboxProps) {
  return (
    <Checkbox
      color="secondary"
      size="lg"
      radius="full"
      className={twMerge(
        '[&>span>svg]:scale-80 [&>span[aria-hidden=true]]:border-2 [&>span[aria-hidden=true]]:text-primary [&>span[aria-hidden=true]]:data-[selected=true]:border-primary [&_svg_polyline]:stroke-[3]',
        className
      )}
      {...props}
    />
  );
}
