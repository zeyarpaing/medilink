import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';

import { unstable_cache } from 'next/cache';

export function $cache<T extends (...args: any[]) => Promise<any>>(fn: T, tags?: string[]) {
  // return unstable_cache(fn, tags && [...tags], { tags });
  return fn;
}

export const getAccount = async function () {
  const session = await getServerSession(authOptions);
  return session?.user ?? null;
};
// ['account']

export const getProvider = $cache(async () => {
  const user = await getAccount();
  if (!user?.id || user?.role !== 'ADMIN')
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
}, ['provider']);

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
