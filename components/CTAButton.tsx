import { Button, ButtonProps } from '@nextui-org/button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ButtonProps & {
  isLink?: boolean;
};

export default function CTAButton({ children, className, isLink, ...props }: Props) {
  return (
    <Button
      as={isLink ? Link : undefined}
      className={twMerge('mt-2 w-full px-8 py-4 text-lg font-semibold shadow-lg hover:opacity-80 sm:w-fit', className)}
      color="primary"
      isDisabled={props.disabled}
      size="lg"
      {...props}
    >
      {children}
    </Button>
  );
}
