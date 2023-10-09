'use server';

import { RedirectType } from 'next/dist/client/components/redirect';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Password } from '@/lib/utils';

export async function createUser(formData: FormData) {
  const password = new Password('' + formData.get('password'));

  const user = await prisma.user.create({
    data: {
      name: '' + formData.get('username') ?? '',
      email: '' + formData.get('email'),
      password: password.encrypt(),
    },
  });
  console.log('createUser', user);
  redirect(`/`, RedirectType.replace);
}
