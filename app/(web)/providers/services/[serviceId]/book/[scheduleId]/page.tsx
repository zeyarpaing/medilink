'use client';

import { createBooking } from '@/app/(web)/providers/services/[serviceId]/book/[scheduleId]/action';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { SelectItem, Select } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} color="primary" type="submit">
      Book Now
    </Button>
  );
}
export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;
  const serviceId = params.serviceId;

  const createBookingWithSerciceId = createBooking.bind(null, { scheduleId, serviceId });

  return (
    <div className="mcontainer min-h-screen py-12">
      <form
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
        action={createBookingWithSerciceId}
      >
        <h1 className="text-center text-2xl font-bold">Book this schedule </h1>
        <small>ID: {scheduleId}</small>
        <label>
          Username:
          <input className="w-full rounded-lg border p-3" name="username" type="text" required />
        </label>
        <label>
          Email:
          <input className="w-full rounded-lg border p-3" name="email" type="email" required />
        </label>
        <label>
          Phone:
          <input className="w-full rounded-lg border p-3" name="phone" type="tel" required />
        </label>

        <Select placeholder="Card or e-wallet" labelPlacement="outside" label="Payment method" name="paymentMethod">
          <SelectItem value="card" key="card">
            Pay at the counter
          </SelectItem>
          {/* <SelectItem value="e-wallet" key="e-wallet"> */}
          {/* E Wallet */}
          {/* </SelectItem> */}
        </Select>
        <SubmitButton />
      </form>
    </div>
  );
}
