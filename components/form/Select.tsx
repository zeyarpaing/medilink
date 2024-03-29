'use client';
import { Select as $Select, SelectItem, SelectProps } from '@nextui-org/react';
import { useField, useFormikContext } from 'formik';
import { ReactNode } from 'react';

type Props = {
  name: string;
  options: Array<{
    label: ReactNode | string;
    value: string;
  }>;
};

export default function Select({ name, options, ...props }: Omit<Props & SelectProps, 'children'>) {
  const [field, { error, touched }] = useField(name);
  const { setFieldTouched } = useFormikContext();

  return (
    <$Select
      classNames={{
        label: 'text-sm font-medium text-foreground',
        trigger: '!h-[3.2rem] px-4',
      }}
      errorMessage={touched ? error : undefined}
      isDisabled={props.disabled}
      label=" "
      labelPlacement="outside"
      placeholder=" "
      selectedKeys={field.value ? ['' + field.value] : []}
      variant="bordered"
      {...field}
      {...props}
      onBlur={(e) => {
        field.onBlur(e);
        setFieldTouched(name, true);
      }}
    >
      {options.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </$Select>
  );
}
