'use server';

import { ServiceFormValues, serviceSchema } from '@/app/(dashboard)/app/service/[serviceId]/schema';
import { sitemap } from '@/lib/constants';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import { uploadImage } from '@/lib/upload';
import { Service } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function mutateService(formData: FormData) {
  const data = Object.fromEntries(
    Object.entries(Object.fromEntries(formData.entries())).map(([key, val]) => {
      if (typeof val === 'string' && val.length > 0 && !isNaN(+val)) {
        return [key, +val];
      }
      return [key, val];
    }),
  ) as unknown;

  const isEdit = data && typeof data === 'object' && 'id' in data && !!data.id;

  return serviceSchema
    .validate(data)
    .then(async (valid) => {
      if (!valid) {
        throw new Error('Invalid request');
      }

      if (isEdit) {
        const editData = data as Service;
        if (typeof editData.image === 'string' && editData.image.startsWith('http')) {
          // image not changed
          return prisma.service
            .update({
              data: { ...editData, id: undefined },
              where: {
                id: +editData.id,
              },
            })
            .then((service) => {
              return {
                data: service,
                message: 'Saved.',
              };
            });
        }
        return uploadImage(formData.get('image') as File, 'service')
          .then(async (image) => {
            return prisma.service
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
              .then((service) => {
                return {
                  data: service,
                  message: 'Saved.',
                };
              });
          })
          .catch(() => {
            throw new Error('An error occurred while uploading your image.');
          });
      }

      /** Create Action */
      const createData = data as ServiceFormValues;

      if (!createData.healthcareProviderId) {
        const { provider } = await getProvider();
        createData.healthcareProviderId = provider?.id;
      }
      if (!createData.healthcareProviderId) return { data: null, message: 'Invalid request' };
      return uploadImage(formData.get('image') as File, 'service')
        .then(async (image) => {
          const service = await prisma.service.create({
            data: {
              ...createData,
              HealthcareProvider: {
                connect: {
                  id: createData.healthcareProviderId,
                },
              },
              healthcareProviderId: undefined,
              image: image.url,
            },
          });
          return {
            data: service,
            message: 'Service created.',
          };
        })
        .catch((err) => {
          throw new Error('An error occurred while uploading your image.');
        });
    })
    .then((res) => {
      revalidatePath(sitemap.app.children.service.href);
      revalidatePath(sitemap.app.children.service.href + '/' + res.data?.id);
      return res;
    });
}
