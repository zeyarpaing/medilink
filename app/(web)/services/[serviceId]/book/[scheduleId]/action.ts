'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createSchedule(...args: any[]) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return null;
}

export async function createBooking({
  scheduleId,
  userId,
  intentId,
}: {
  scheduleId: string;
  userId: string;
  intentId: string;
}) {
  const booking = await prisma.booking.findFirst({
    where: {
      scheduleId,
      status: 'CONFIRMED',
      user: {
        accountId: userId,
      },
    },
  });

  if (booking) {
    throw new Error('You have already booked this schedule.');
  }
  return prisma.booking
    .create({
      data: {
        schedule: {
          connect: {
            id: scheduleId,
          },
        },
        Transaction: {
          create: {
            paymentMethod: 'stripe',
            id: intentId,
          },
        },
        user: {
          connect: {
            accountId: userId,
          },
        },
      },
    })
    .then((booking) => {
      revalidatePath(`/app/booking`);
      return {
        data: booking,
        message: 'Booked successfully.',
      };
    })
    .catch((error) => {
      console.error(error);
      throw new Error('Booking failed.');
    });
}
