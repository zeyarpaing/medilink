'use server';

import prisma from '@/lib/prisma';
import { Booking } from '@prisma/client';
import { revalidateTag } from 'next/cache';

export async function updateBookingStatus(bookingId: string, status: Booking['status']) {
  return prisma.booking
    .update({
      data: {
        status: status,
      },
      where: {
        id: bookingId,
      },
    })
    .then((booking) => {
      revalidateTag(`bookings`);
      return {
        data: booking,
        message: 'Booking ' + status?.toLowerCase(),
      };
    })
    .catch((error) => {
      throw new Error('There was an error updating the booking status.');
    });
}
