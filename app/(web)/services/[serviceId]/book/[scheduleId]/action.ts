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

export async function createBooking(
  { scheduleId, serviceId }: { scheduleId: string; serviceId: string },
  formData: FormData
) {
  console.log('createBooking', scheduleId, formData.get('paymentMethod'));

  const booking = await prisma.booking.create({
    data: {
      email: '' + formData.get('email'),
      phone: '' + formData.get('phone'),
      schedule: {
        connect: {
          id: scheduleId,
        },
      },
      //bind transaction id
      transaction: {
        create: {
          paymentMethod: '' + formData.get('paymentMethod'),
        },
      },
      username: '' + formData.get('username') ?? '',
    },
  });
  if (!booking) {
    redirect('/');
  }
  revalidatePath(`/providers/services/${serviceId}`);
  redirect(`/providers/services/${serviceId}`, RedirectType.replace);
}
