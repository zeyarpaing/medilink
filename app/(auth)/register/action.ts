'use server';

import { RegisterForm, registerSchema } from '@/app/(auth)/register/schema';
import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { RedirectType } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export async function registerAccount(formData: RegisterForm) {
  return registerSchema.isValid(formData).then((valid) => {
    if (!valid) {
      throw new Error('Invalid data');
    }
    console.log('valid', valid);
    return 'Hello world';
  });
  return;
  const password = new Password('' + formData.password);

  const user = await prisma.user.create({
    data: {
      email: '' + formData.get('email'),
      name: '' + formData.get('username') ?? '',
      password: password.encrypt(),
    },
  });
  console.log('createUser', user);
  redirect(`/`, RedirectType.replace);
}
