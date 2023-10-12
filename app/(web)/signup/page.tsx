'use client';

import { createUser } from '@/app/(web)/signup/action';
import { Button } from '@nextui-org/button';
import { Select, SelectItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button color="primary" isLoading={pending} type="submit">
      Sign up
    </Button>
  );
}
export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/providers/hospital');
    }
  }, [status]);

  return (
    <div className="mcontainer min-h-screen py-12">
      <form
        action={createUser}
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
      >
        <h1 className="text-center text-2xl font-bold">Sing up </h1>
        <label>
          Username:
          <input className="w-full rounded-lg border p-3" name="username" required type="text" />
        </label>
        <label>
          Email:
          <input className="w-full rounded-lg border p-3" name="email" required type="email" />
        </label>
        {/* <label>
          Phone:
          <input className="w-full rounded-lg border p-3" name="phone" type="tel" required />
        </label> */}
        <label>
          Password:
          <input className="w-full rounded-lg border p-3" name="password" required type="password" />
        </label>

        {/* <Select placeholder="Card or e-wallet" labelPlacement="outside" label="Payment method" name="paymentMethod">
          <SelectItem value="card" key="card">
            Pay at the counter
          </SelectItem> */}
        {/* <SelectItem value="e-wallet" key="e-wallet"> */}
        {/* E Wallet */}
        {/* </SelectItem> */}
        {/* </Select> */}
        <SubmitButton />
      </form>
    </div>
  );
}
