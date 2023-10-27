import prisma from '@/lib/prisma';
import Payment from './Payment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;

  const session = await getServerSession(authOptions);

  const schedule = await prisma.schedule.findUnique({
    where: { id: scheduleId },
    include: {
      Booking: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!schedule) notFound();

  console.log('sb', schedule.Booking, session?.user?.id);
  if (
    schedule?.Booking?.find((booking) => booking.status === 'CONFIRMED' && booking.user.accountId === session?.user?.id)
  ) {
    throw new Error('You have already booked this schedule');
  }

  return (
    <div className="mcontainer min-h-screen py-12">
      <div className="mx-auto flex max-w-lg flex-col gap-4 py-12 ">
        <h1 className="text-center text-2xl font-bold">Book this Schedule </h1>
        <small>Schedule ID: {scheduleId}</small>
        <p>
          You will be charged <b>${schedule?.bookingPrice}</b> to secure your booking. Your booking will be reserved
          after you successfully paid.{' '}
        </p>
        <Payment schedule={schedule!} />
      </div>
    </div>
  );
}
