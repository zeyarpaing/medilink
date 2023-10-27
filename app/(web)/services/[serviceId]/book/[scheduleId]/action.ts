'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createSchedule(...args: any[]) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return null;
}

export async function createBooking({ scheduleId, userId }: { scheduleId: string; userId: string }) {
  return prisma.booking
    .create({
      data: {
        schedule: {
          connect: {
            id: scheduleId,
          },
        },
        user: {
          connect: {
            id: userId,
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
      throw new Error('Booking failed.');
    });
}
