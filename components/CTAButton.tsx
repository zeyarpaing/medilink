import { Button, ButtonProps } from '@nextui-org/button';
import { twMerge } from 'tailwind-merge';

export default function CTAButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={twMerge('mt-2 w-full px-8 py-4 text-lg font-semibold shadow-lg hover:opacity-90 sm:w-fit', className)}
      color="primary"
      size="lg"
      {...props}
    >
      {props.children}
    </Button>
  );
}
