import CheckBox from '@/components/CheckBox';
import { CheckboxProps, Radio, RadioProps } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';

export const CustomRadio = ({ className, ...props }: RadioProps) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      classNames={{
        base: twMerge(
          'inline-flex m-0 bg-content1 text-center hover:bg-content2 items-center justify-center',
          'max-w-[120px] [&>span[aria-hidden=true]]:hidden cursor-pointer  rounded-full gap-4 p-4 border-2',
          'data-[selected=true]:border-primary data-[selected=true]:bg-primary [&>div]:ml-0 [&>div>span]:font-semibold [&>div>span]:data-[selected=true]:text-white ',
          className
        ),
      }}
      {...otherProps}
    >
      {children}
    </Radio>
  );
};

export const PlanRadio = ({ className, outline, ...props }: CheckboxProps & { outline?: boolean }) => {
  const { children, ...otherProps } = props;

  return (
    <CheckBox
      classNames={{
        base: twMerge(
          'flex flex-1 m-0 bg-content1 hover:bg-content2 items-center gap-2 w-full',
          'flex-row max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2',
          `data-[selected=true]:border-primary ${
            outline ? '' : 'data-[selected=true]:bg-primary [&_*]:data-[selected=true]:text-white'
          }`,
          className
        ),
        label: 'w-full',
      }}
      {...otherProps}
    >
      {children}
    </CheckBox>
  );
};
