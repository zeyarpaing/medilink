'use client';
import { createBooking } from '@/app/(web)/providers/services/[serviceId]/book/[scheduleId]/action';
import { SelectItem, Select } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;

  const createBookingWithSerciceId = createBooking.bind(null, scheduleId);

  return (
    <div>
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
            Card
          </SelectItem>
          <SelectItem value="e-wallet" key="e-wallet">
            E Wallet
          </SelectItem>
        </Select>
        <Button color="primary" type="submit">
          Book Now
        </Button>
      </form>
    </div>
  );
}
