'use client';

import { CheckRadioItem } from '@/components/form/Radio';
import { RadioGroup as $RadioGroup, RadioGroupProps } from '@nextui-org/react';
import { useField } from 'formik';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = { name: string; options: Array<{ icon?: ReactNode; label: string; value: boolean | string }> };

export default function RadioGroup({ className, name, options, ...props }: RadioGroupProps & Props) {
  const [{ onChange, value, ...field }, { error }] = useField(name);
  return (
    <div>
      <$RadioGroup
        classNames={{
          label: 'text-sm text-foreground font-medium',
          wrapper: twMerge('flex-col [&>*]:flex-1', className),
        }}
        label=" "
        {...field}
        {...props}
      >
        {options.map((item) => (
          <CheckRadioItem
            isSelected={'' + item.value === value}
            key={'' + item.value}
            name={name}
            onChange={(e) => {
              onChange({ ...e, target: { ...e.target, name, value: e.target.checked ? item.value : '' } });
            }}
            outline
            value={'' + item.value}
          >
            {item.icon} {item.label}
          </CheckRadioItem>
        ))}
      </$RadioGroup>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
