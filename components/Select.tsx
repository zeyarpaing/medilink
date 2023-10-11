'use client';
import { Select as $Select, SelectItem, SelectProps } from '@nextui-org/react';
import { useField } from 'formik';

type Props = {
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export default function Select({ name, options, ...props }: Omit<Props & SelectProps, 'children'>) {
  const [field] = useField(name);
  return (
    <$Select
      variant="bordered"
      classNames={{
        label: 'text-sm font-medium text-foreground',
        trigger: '!h-14 px-4',
      }}
      labelPlacement="outside"
      placeholder=" "
      label=" "
      {...field}
      {...props}
    >
      {options.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </$Select>
  );
}
