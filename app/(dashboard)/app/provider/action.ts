'use server';

import { ProviderFormValues, providerSchema } from '@/app/(dashboard)/app/provider/schema';
import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { uploadImage } from '@/lib/upload';
import { HealthcareProvider } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function mutateHealthcareProvider(formData: FormData) {
  const data = Object.fromEntries(formData.entries()) as unknown;

  const isEdit = data && typeof data === 'object' && 'id' in data && !!data.id;

  return providerSchema
    .validate(data)
    .then((valid) => {
      if (!valid) {
        throw new Error('Invalid request');
      }

      if (isEdit) {
        const editData = data as HealthcareProvider;
        if (typeof editData.image === 'string' && editData.image.startsWith('http')) {
          // image not changed
          return prisma.healthcareProvider
            .update({
              data: { ...editData, id: undefined },
              where: {
                id: +editData.id,
              },
            })
            .then((provider) => {
              return {
                data: provider,
                message: 'Saved.',
              };
            });
        }
        return uploadImage(formData.get('image') as File, 'healthcare-provider')
          .then(async (image) => {
            return prisma.healthcareProvider
              .update({
                data: {
                  ...editData,
                  id: undefined,
                  image: image.url,
                },
                where: {
                  id: +editData.id,
                },
              })
              .then((provider) => {
                return {
                  data: provider,
                  message: 'Saved.',
                };
              });
          })
          .catch(() => {
            throw new Error('An error occurred while uploading your image.');
          });
      }

      /** Create Action */
      const createData = data as ProviderFormValues;
      return uploadImage(formData.get('image') as File, 'healthcare-provider')
        .then(async (image) => {
          const provider = await prisma.healthcareProvider.create({
            data: {
              ...createData,
              Admin: {
                connect: {
                  accountId: createData.adminId,
                },
              },
              // @ts-ignore
              adminId: undefined,
              image: image.url,
            },
          });
          return {
            data: provider,
            message: 'Saved.',
          };
        })
        .catch((err) => {
          console.error(err);
          throw new Error('An error occurred while uploading your image.');
        });
    })
    .then((res) => {
      revalidatePath(sitemap.app.children.provider.href);
      return res;
    });
}
