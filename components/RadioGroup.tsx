'use client';

import { CustomRadio } from '@/components/Radio';
import { RadioGroup as $RadioGroup, RadioGroupProps } from '@nextui-org/react';
import { useField } from 'formik';

type Props = { name: string; options: Array<{ label: string; value: boolean | string }> };

export default function RadioGroup({ name, options, ...props }: RadioGroupProps & Props) {
  const [{ onChange, value, ...field }] = useField(name);
  return (
    <$RadioGroup
      classNames={{ label: 'text-sm text-foreground font-medium', wrapper: 'flex-row [&>*]:flex-1' }}
      label=" "
      {...field}
      onChange={(e) => {
        typeof options[0].value === 'boolean'
          ? onChange({ ...e, target: { ...e.target, name, value: e.target.value === 'true' } })
          : onChange(e);
      }}
      value={'' + value}
      {...props}
    >
      {options.map((item) => (
        <CustomRadio key={'' + item.value} name={name} value={'' + item.value}>
          {item.label}
        </CustomRadio>
      ))}
    </$RadioGroup>
  );
}
