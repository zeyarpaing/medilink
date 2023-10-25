'use server';

import { RegisterForm, registerSchema } from '@/app/(auth)/register/schema';
import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { Role } from '@prisma/client';

export async function registerAccount(formData: RegisterForm) {
  return registerSchema.isValid(formData).then(async (valid) => {
    if (!valid) {
      throw new Error('Invalid data');
    }
    const password = new Password(formData.password);
    return prisma.account
      .create({
        // @ts-ignore
        data: {
          email: formData.email.trim(),
          name: formData.name.trim(),
          password: password.encrypt(),
          role: formData.role as Role,
          ...(formData.role === 'USER'
            ? {
                User: {
                  create: true,
                },
              }
            : formData.role === 'DOCTOR'
            ? {
                Doctor: {
                  create: {
                    certification: formData.certification,
                    speciality: formData.speciality,
                  },
                },
              }
            : {
                Admin: {
                  create: true,
                },
              }),
        },
      })
      .then((user) => {
        return {
          data: user,
          message: 'Account registered.',
        };
      })
      .catch((reason) => {
        if (reason.code === 'P2002') {
          throw new Error('An account with this email already exists.');
        }
        throw new Error('An error occurred while creating your account.');
      });
  });
}
