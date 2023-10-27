'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

type Props = {
  error: Error;
  onReset: () => void;
};

export default function Error({ error, onReset }: Props) {
  const router = useRouter();
  return (
    <div className="grid min-h-[60vh] place-items-center  py-12">
      <div className="flex max-w-lg flex-col items-center gap-4 text-center">
        <h1 className="text-center text-2xl font-bold">Sorry! There was an error.</h1>
        <p>{error.message}</p>
        <div className="flex gap-2">
          <Button className="mt-4" color="default" onPress={router.back}>
            Back
          </Button>
          <Button className="mt-4" href="/app/booking" isLink>
            See my bookings
          </Button>
        </div>
      </div>
    </div>
  );
}
