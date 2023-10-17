'use server';

import { ScheduleFormValues, scheduleSchema } from '@/app/(dashboard)/app/schedule/[scheduleId]/schema';
import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function mutateSchedule(data: Partial<ScheduleFormValues>) {
  const isEdit = data && typeof data === 'object' && 'id' in data && !!data.id;

  return scheduleSchema
    .validate(data)
    .then(async (valid) => {
      if (!valid) {
        throw new Error('Invalid request');
      }

      if (isEdit) {
        return prisma.schedule
          .update({
            data: { ...data, id: undefined },
            where: {
              id: data.id,
            },
          })
          .then((schedule) => {
            return {
              data: schedule,
              message: 'Saved.',
            };
          });
      }

      /** Create Action */

      const schedule = await prisma.schedule.create({
        data: {
          Service: {
            connect: {
              id: +data.serviceId!,
            },
          },
          dateTime: data.dateTime!,
          duration: +data.duration!,
          maxBooking: +data.maxBooking!,
        },
      });
      return {
        data: schedule,
        message: 'Schedule created.',
      };
    })
    .then((res) => {
      revalidatePath(sitemap.app.children.schedule.href);
      return res;
    })
    .catch((err) => {
      return {
        data: null,
        message: 'Failed to save schedule.',
      };
    });
}