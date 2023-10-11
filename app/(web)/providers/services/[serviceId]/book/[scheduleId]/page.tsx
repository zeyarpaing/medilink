'use client';

import { createBooking } from '@/app/(web)/providers/services/[serviceId]/book/[scheduleId]/action';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { SelectItem, Select } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} color="primary" type="submit">
      Pay Now
    </Button>
  );
}
export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;
  const serviceId = params.serviceId;

  const { status, data } = useSession();

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
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
        action={createBookingWithSerciceId}
      >
        <h1 className="text-center text-2xl font-bold">Pay to confirm the booking </h1>
        <small>ID: {scheduleId}</small>
        {/* <input
          disabled
          className="w-full rounded-lg border p-3 disabled:bg-gray-200"
          name="userid"
          type="text"
          required
          // @ts-ignore
          value={data?.user?.id}
        />
        <label>
          Username:
          <input
            disabled
            className="w-full rounded-lg border p-3 disabled:bg-gray-200"
            name="username"
            type="text"
            required
            value={data?.user?.name}
          />
        </label>
        <label>
          Email:
          <input
            disabled
            className="w-full rounded-lg border p-3 disabled:bg-gray-200"
            name="email"
            type="email"
            required
            value={data?.user?.email}
          />
        </label>
        <label>
          Phone:
          <input className="w-full rounded-lg border p-3" name="phone" type="tel" required />
        </label> */}
        <img src="/image.jpg" />
        <SubmitButton />
      </form>
    </div>
  );
}
