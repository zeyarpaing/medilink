'use client';

import { Input as $Input, InputProps, Textarea } from '@nextui-org/react';
import { useField } from 'formik';
import React from 'react';

type Props = {
  name: string;
};

export default function Input({ name, ...props }: InputProps & Props) {
  const [field] = useField(name);
  return props.type === 'textarea' ? (
    <Textarea
      classNames={{
        input: 'text-left p-4 !text-[16px] resize-y',
        inputWrapper: 'px-0',
        label: 'text-sm font-medium text-foreground',
      }}
      label=" "
      labelPlacement="outside"
      placeholder=" "
      variant="bordered"
      {...field}
      {...props}
    />
  ) : (
    <$Input
      classNames={{
        input: 'text-left px-2 !text-[16px]',
        inputWrapper: '!h-14',
        label: 'text-sm font-medium text-foreground',
      }}
      label=" "
      labelPlacement="outside"
      placeholder=" "
      variant="bordered"
      {...field}
      {...props}
    />
  );
}
