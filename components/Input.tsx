'use client';

import { Input as $Input, InputProps, Textarea } from '@nextui-org/react';
import { useField } from 'formik';
import React from 'react';

type Props = {
  name: string;
};

export default function Input({ name, ...props }: InputProps & Props) {
  const [field, { error, touched }] = useField(name);

  return props.type === 'textarea' ? (
    <Textarea
      classNames={{
        base: 'data-[disabled=true]:opacity-100 [&>div>div]:data-[disabled=true]:bg-gray-200',
        input: 'text-left p-4 !text-[16px] resize-y',
        inputWrapper: 'px-0 data-[focus=true]:!border-blue-800',
        label: 'text-sm font-medium text-foreground',
      }}
      isDisabled={props.disabled}
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
        base: 'data-[disabled=true]:opacity-100 [&>div>div]:data-[disabled=true]:bg-gray-200',
        input: 'text-left px-4 rounded-lg !text-[16px]',
        inputWrapper: '!h-[3.2rem] px-0 data-[focus=true]:!border-blue-800',
        label: 'text-sm font-medium text-foreground',
      }}
      errorMessage={touched ? error : undefined}
      isDisabled={props.disabled}
      label=" "
      labelPlacement="outside"
      placeholder=" "
      variant="bordered"
      {...field}
      {...props}
    />
  );
}
