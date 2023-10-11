'use client';

import React from 'react';
import { Input as $Input, InputProps, Textarea } from '@nextui-org/react';
import { useField } from 'formik';

type Props = {
  name: string;
};

export default function Input({ name, ...props }: InputProps & Props) {
  const [field] = useField(name);
  return props.type === 'textarea' ? (
    <Textarea
      labelPlacement="outside"
      placeholder=" "
      variant="bordered"
      classNames={{
        label: 'text-sm font-medium text-foreground',
        inputWrapper: 'px-0',
        input: 'text-left p-4 !text-[16px] resize-y',
      }}
      label=" "
      {...field}
      {...props}
    />
  ) : (
    <$Input
      labelPlacement="outside"
      placeholder=" "
      variant="bordered"
      classNames={{
        label: 'text-sm font-medium text-foreground',
        inputWrapper: '!h-14',
        input: 'text-left px-2 !text-[16px]',
      }}
      label=" "
      {...field}
      {...props}
    />
  );
}
