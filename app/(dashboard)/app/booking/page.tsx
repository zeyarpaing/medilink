import BookingCard from '@/app/(dashboard)/app/booking/BookingCard';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { Menu } from '@nextui-org/react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import React from 'react';
import { $cache } from '@/lib/services';
import { Role } from '@prisma/client';

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

export default async function Page() {
  const session = await getServerSession(authOptions);
  const bookings = await getBookings(session?.user?.role!, session?.user?.id!);

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Bookings</h1>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-3">
        {bookings?.map((booking) => (
          <BookingCard booking={booking} key={booking.id} />
        ))}
      </div>
    </div>
  );
}
