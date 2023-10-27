import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Button from '@/components/Button';
import CheckBox from '@/components/form/CheckBox';
import { getServerSession } from 'next-auth';

import { createBooking } from '../action';

type Props = {
  params: {
    scheduleId: string;
  };
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: 'succeeded' | 'failed';
  };
};

export default async function page({ params, searchParams }: Props) {
  const scheduleId = params.scheduleId;
  const session = await getServerSession(authOptions);

  await createBooking({ scheduleId, userId: session?.user.id!, intentId: searchParams.payment_intent });

  return (
    <div className="grid min-h-[60vh] place-items-center  py-12">
      <div className="flex max-w-lg flex-col items-center gap-4 text-center">
        <CheckBox className="mb-4 ml-6 scale-[3]" color="success" isSelected={true} />
        <h1 className="text-center text-2xl font-bold">Thank you for booking with us!</h1>
        <p>
          You have paid the booking fees and you have successfully booked for the schedule <b>{scheduleId}</b>
        </p>
        <Button className="mt-4" href="/app/booking" isLink>
          See my bookings
        </Button>
      </div>
    </div>
  );
}
