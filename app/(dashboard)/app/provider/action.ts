'use server';

import { ProviderFormValues, providerSchema } from '@/app/(dashboard)/app/provider/schema';
import prisma from '@/lib/prisma';
import { uploadImage } from '@/lib/upload';

export async function createHealthcareProvider(formData: FormData) {
  const data = Object.fromEntries(formData.entries()) as unknown as ProviderFormValues;
  return providerSchema.validate(data).then((valid) => {
    if (!valid) {
      throw new Error('Invalid request');
    }
    return uploadImage(formData.get('image') as File, 'healthcare-provider')
      .then(async (image) => {
        const provider = await prisma.healthcareProvider.create({
          data: {
            ...data,
            image: image.url,
            owner: {
              connect: {
                id: data.ownerId,
              },
            },
            ownerId: undefined,
          },
        });
        return {
          data: provider,
          message: 'Saved.',
        };
      })
      .catch(() => {
        throw new Error('An error occurred while uploading your image.');
      });
  });
}
