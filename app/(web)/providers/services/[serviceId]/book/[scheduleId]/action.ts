'use server';

import prisma from '@/lib/prisma';

export async function createBooking(scheduleId: string, formData: FormData) {
  console.log('createBooking', scheduleId, formData.get('paymentMethod'));

  const booking = await prisma.booking.create({
    data: {
      //bind transaction id
      transaction: {
        create: {
          paymentMethod: '' + formData.get('paymentMethod'),
        },
      },
      schedule: {
        connect: {
          id: parseInt(scheduleId),
        },
      },
      username: '' + formData.get('username') ?? '',
      phone: '' + formData.get('phone'),
      email: '' + formData.get('email'),
    },
  });
  if (!booking) {
    return 'Booking failed';
  }
  return 'Booking successful';
}
