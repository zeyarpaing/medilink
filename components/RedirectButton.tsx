import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import { Button, ButtonProps } from '@nextui-org/button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function RedirectButton({ children, className, isLink, ...props }: ButtonProps & { isLink?: boolean }) {
  return (
    <Button
      as={isLink ? Link : undefined}
      className={twMerge('group mt-8 px-6 py-4 text-base font-medium hover:opacity-90', className)}
      color="primary"
      endContent={
        <span className="-rotate-90 scale-80 transition-transform group-hover:translate-x-1">
          <ChevronDownIcon />
        </span>
      }
      radius="full"
      size="lg"
      variant="bordered"
      {...props}
    >
      {children}
    </Button>
  );
}
