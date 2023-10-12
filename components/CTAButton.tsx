import { Button, ButtonProps } from '@nextui-org/button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ButtonProps & {
  isLink?: boolean;
};

export default function CTAButton({ children, className, href, isLink, ...props }: Props) {
  return (
    <Button
      className={twMerge('mt-2 w-full px-8 py-4 text-lg font-semibold shadow-lg hover:opacity-90 sm:w-fit', className)}
      color="primary"
      size="lg"
      {...props}
    >
      {isLink ? <Link href={href!}>{children}</Link> : children}
    </Button>
  );
}
