import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import prisma from '@/lib/prisma';
import { Account, Role, User } from '@prisma/client';
import { getServerSession } from 'next-auth';

import { unstable_cache } from 'next/cache';

export const getAccount = async function () {
  const session = await getServerSession(authOptions);
  return session?.user ?? null;
};

export function $cache<T extends (...args: any[]) => Promise<any>>(fn: T, tags?: string[], key?: string[]) {
  return unstable_cache(fn, key, { tags });
}

export const getProvider = async () => {
  const user = await getAccount();
  const provider = await $cache(
    async (user?: Account) => {
      if (user?.id || user?.role !== 'ADMIN')
        return {
          account: user ?? null,
          provider: null,
        };
      const provider = await prisma.healthcareProvider.findFirst({
        where: {
          Admin: {
            accountId: user?.id,
          },
        },
      });
      return { account: user ?? null, provider: provider ?? null };
    },
    ['provider'],
  );
  return provider(user as Account);
};

export const getServicesOfProvider = $cache(
  (providerId: number) =>
    prisma.service.findMany({
      where: {
        healthcareProviderId: providerId,
      },
    }),
  ['services'],
);

export const getDoctorsOfProvider = $cache(
  (providerId: number) =>
    prisma.doctor.findMany({
      include: {
        Account: true,
      },
      where: {
        healthcareProviderId: providerId,
      },
    }),
  ['doctors'],
);
