import BookingCard from '@/app/(dashboard)/app/booking/BookingCard';
import prisma from '@/lib/prisma';
import { Menu } from '@nextui-org/react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import React from 'react';

type Props = {};

export default async function Page({}: Props) {
  const session = await getServerSession();
  const bookings = await prisma.booking.findMany({
    include: {
      schedule: {
        include: {
          Service: true,
          User: true,
        },
      },
      user: true,
    },
    where: {
      userId: session?.user?.id,
    },
  });
  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Bookings</h1>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {bookings?.map((booking) => (
          <BookingCard
            booking={booking}
            key={booking.id}
            schedule={booking.schedule as any}
            title={booking.schedule.Service.name}
          />
        ))}
      </div>
    </div>
  );
}
