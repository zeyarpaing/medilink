import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import { Button, ButtonProps } from '@nextui-org/button';
import { twMerge } from 'tailwind-merge';

export default function RedirectButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={twMerge('mt-8 px-6 py-4 text-base font-medium', className)}
      color="primary"
      endContent={
        <span className="-rotate-90 scale-80">
          <ChevronDownIcon />
        </span>
      }
      radius="full"
      size="lg"
      variant="bordered"
      {...props}
    >
      {props.children}
    </Button>
  );
}
