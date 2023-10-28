'use server';

import prisma from '@/lib/prisma';
import { revalidateTag } from 'next/cache';

export async function cancelBooking(bookingId: string, cancelBy: string) {
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
      revalidateTag(`bookings`);
      return {
        data: booking,
        message: 'Booking cancelled successfully.',
      };
    })
    .catch((error) => {
      throw new Error('Booking cancellation failed.');
    });
}
