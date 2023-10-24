'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { RedirectType } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export async function createSchedule(...args: any[]) {
  console.log('createSchedule', args, typeof window, process.pid);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return null;
}

export async function createBooking({ scheduleId, userId }: { scheduleId: string; userId: string }) {
  console.log('createBooking', scheduleId, userId);

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
      return {
        data: booking,
        message: 'Booked successfully.',
      };
    })
    .catch((error) => {
      throw new Error('Booking failed.');
    });
}
