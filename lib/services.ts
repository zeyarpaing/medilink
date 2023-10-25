'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function getProvider() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id || session?.user.role !== 'ADMIN')
    return {
      account: session?.user ?? null,
      provider: null,
    };

  const provider = await prisma.healthcareProvider.findFirst({
    where: {
      Admin: {
        accountId: session?.user.id,
      },
    },
  });
  return { account: session?.user ?? null, provider: provider ?? null };
}
