'use server';

import { RedirectType } from 'next/dist/client/components/redirect';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export async function createBooking(
  { scheduleId, serviceId }: { scheduleId: string; serviceId: string },
  formData: FormData
) {
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
    redirect('/');
  }
  revalidatePath(`/providers/services/${serviceId}`);
  redirect(`/providers/services/${serviceId}`, RedirectType.replace);
}
