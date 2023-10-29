import BookingCard from '@/app/(dashboard)/app/booking/BookingCard';
import EmptyState from '@/components/EmptyState';
import prisma from '@/lib/prisma';
import { $cache, getAccount } from '@/lib/services';
import { Role } from '@prisma/client';

export const dynamic = 'force-dynamic';

const getBookings = $cache(
  (role: Role, accountId: string) =>
    prisma.booking.findMany({
      include: {
        schedule: {
          include: {
            Service: true,
            Doctor: {
              include: {
                Account: true,
              },
            },
          },
        },
        user: {
          include: { Account: true },
        },
      },
      where:
        role === 'USER'
          ? {
              user: { accountId: accountId },
            }
          : {
              schedule: {
                Doctor: {
                  accountId: accountId,
                },
              },
            },
    }),
  ['bookings'],
);

const getDoctor = $cache((accountId: string) =>
  prisma.doctor.findUnique({
    include: {
      Account: true,
    },
    where: {
      accountId: accountId,
    },
  }),
);

export default async function Page() {
  const user = await getAccount();
  const bookings = await getBookings(user?.role!, user?.id!);
  const doctor = user?.role === 'DOCTOR' ? await getDoctor(user?.id!) : null;

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Bookings</h1>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-3">
        {bookings?.length > 0 ? (
          bookings?.map((booking) => <BookingCard booking={booking} key={booking.id} />)
        ) : (
          <EmptyState
            title={!doctor?.healthcareProviderId ? "You haven't joined a healthcare provider yet" : 'No bookings yet'}
            description={
              !doctor?.healthcareProviderId
                ? 'Please ask the provider admin to send you an invite link.'
                : "Enjoy your day. You don't have any bookings yet."
            }
          />
        )}
      </div>
    </div>
  );
}
