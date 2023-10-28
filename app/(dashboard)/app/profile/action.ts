'use server';

import { profileFormSchema } from '@/app/(dashboard)/app/profile/schema';
import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { uploadImage } from '@/lib/upload';
import { Account, HealthcareProvider } from '@prisma/client';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function mutateProfile(formData: FormData) {
  const data = Object.fromEntries(formData.entries()) as unknown;

  return profileFormSchema
    .validate(data)
    .then((valid) => {
      if (!valid) {
        throw new Error('Invalid request');
      }

      const editData = { ...(data as Account), emailVerified: undefined, role: undefined };
      if (typeof editData.image === 'string' && editData.image.startsWith('http')) {
        // image not changed
        return prisma.account
          .update({
            data: { ...editData, id: undefined },
            where: {
              id: editData.id,
            },
          })
          .then((provider) => {
            return {
              data: provider,
              message: 'Saved.',
            };
          });
      }

      return uploadImage(formData.get('image') as File, 'profile-image')
        .then(async (image) => {
          return prisma.account
            .update({
              data: {
                ...editData,
                id: undefined,
                image: image.url,
              },
              where: {
                id: editData.id,
              },
            })
            .then((provider) => {
              return {
                data: provider,
                message: 'Saved.',
              };
            });
        })
        .catch((err) => {
          console.error(err);
          throw new Error('An error occurred while uploading your image.');
        });
    })
    .then((res) => {
      revalidateTag('account');
      revalidatePath('/app/profile');
      return res;
    });
}
