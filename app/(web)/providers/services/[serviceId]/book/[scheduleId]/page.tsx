'use client';

import { createBooking } from '@/app/(web)/providers/services/[serviceId]/book/[scheduleId]/action';
import { Button } from '@nextui-org/button';
import { Select, SelectItem } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button color="primary" isLoading={pending} type="submit">
      Pay Now
    </Button>
  );
}
export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;
  const serviceId = params.serviceId;

  const { data, status } = useSession();

  const createBookingWithSerciceId = createBooking.bind(null, { scheduleId, serviceId });

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (status !== 'loading' && status !== 'authenticated') {
      router.replace('/signin' + `?callbackUrl=${encodeURIComponent(path)}`);
    }
  }, [status]);

  return (
    <div className="mcontainer min-h-screen py-12">
      <form
        action={createBookingWithSerciceId}
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
      >
        <h1 className="text-center text-2xl font-bold">Pay to confirm the booking </h1>
        <small>ID: {scheduleId}</small>
        <input
          className="w-full rounded-lg border p-3 disabled:bg-gray-200"
          disabled
          name="userid"
          required
          type="text"
          // @ts-ignore
          value={data?.user?.id}
        />
        <label>
          Username:
          <input
            className="w-full rounded-lg border p-3 disabled:bg-gray-200"
            disabled
            name="username"
            required
            type="text"
            value={data?.user?.name}
          />
        </label>
        <label>
          Email:
          <input
            className="w-full rounded-lg border p-3 disabled:bg-gray-200"
            disabled
            name="email"
            required
            type="email"
            value={data?.user?.email}
          />
        </label>
        <label>
          Phone:
          <input className="w-full rounded-lg border p-3" name="phone" required type="tel" />
        </label>
        {/* <img src="/image.jpg" /> */}
        <SubmitButton />
      </form>
    </div>
  );
}
