'use server';

import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { RedirectType } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const password = new Password('' + formData.get('password'));

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
