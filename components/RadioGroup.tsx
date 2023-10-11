'use client';

import { CustomRadio } from '@/components/Radio';
import { RadioGroup as $RadioGroup, RadioGroupProps } from '@nextui-org/react';
import { useField } from 'formik';

type Props = { name: string; options: Array<{ label: string; value: string | boolean }> };

export default function RadioGroup({ name, options, ...props }: RadioGroupProps & Props) {
  const [{ onChange, value, ...field }] = useField(name);
  return (
    <$RadioGroup
      classNames={{ wrapper: 'flex-row [&>*]:flex-1', label: 'text-sm text-foreground font-medium' }}
      label=" "
      {...field}
      value={'' + value}
      onChange={(e) => {
        typeof options[0].value === 'boolean'
          ? onChange({ ...e, target: { ...e.target, name, value: e.target.value === 'true' } })
          : onChange(e);
      }}
      {...props}
    >
      {options.map((item) => (
        <CustomRadio name={name} key={'' + item.value} value={'' + item.value}>
          {item.label}
        </CustomRadio>
      ))}
    </$RadioGroup>
  );
}
