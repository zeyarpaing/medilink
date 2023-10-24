'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function cancelBooking(bookingId: string, cancelBy: string) {
  console.log('cancelBooking', bookingId);
  return prisma.booking
    .update({
      data: {
        status: 'CANCELLED',
      },
      where: {
        id: bookingId,
      },
    })
    .then((booking) => {
      revalidatePath(`/app/booking`);
      return {
        data: booking,
        message: 'Booking cancelled successfully.',
      };
    })
    .catch((error) => {
      throw new Error('Booking cancellation failed.');
    });
}
