import Schedules from '@/app/(dashboard)/app/schedule/Schedules';
import CTAButton from '@/components/CTAButton';
import EmptyState from '@/components/EmptyState';
import SetupProvider from '@/components/SetupProvider';
import prisma from '@/lib/prisma';
import { $cache, getProvider } from '@/lib/services';
import { Role } from '@prisma/client';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react';

type Props = {
  params: any;
  searchParams: {
    date?: string;
  };
};

const getSchedules = $cache(
  async (role: Role, accountId: string, providerId: number, date?: Date) =>
    prisma.schedule.findMany({
      include: {
        Doctor: {
          include: {
            Account: true,
          },
        },
        Service: true,
      },
      where:
        role === 'DOCTOR'
          ? {
              Doctor: {
                accountId: accountId,
              },
              dateTime: date
                ? {
                    gte: startOfDay(new Date(date)),
                    lte: endOfDay(new Date(date)),
                  }
                : undefined,
            }
          : {
              dateTime: date
                ? {
                    gte: startOfDay(new Date(date)),
                    lte: endOfDay(new Date(date)),
                  }
                : undefined,
              providerId: providerId || 0,
            },
    }),
  ['schedules'],
);

export default async function Page({ params, searchParams }: Props) {
  const date = searchParams?.date;
  const { account, provider } = await getProvider();

  if (account?.role === 'ADMIN' && !provider) return <SetupProvider />;

  const schedules = await getSchedules(account?.role!, account?.id!, provider?.id!, date ? new Date(date) : undefined);

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Schedules</h1>
          <p className="text-sm text-gray-500">
            {account?.role === 'ADMIN' ? 'Manage your provided services' : 'Track the schedules assigned to you'}
          </p>
        </div>
        <div>
          <CTAButton className="px-5 text-base" href="schedule/new" isLink>
            + New schedule
          </CTAButton>
        </div>
      </div>
      {schedules?.length === 0 ? (
        <EmptyState title="No schedules yet" description="Create a new schedule" />
      ) : (
        <>
          {/* @ts-ignore */}
          <Schedules role={account?.role} schedules={schedules} />
        </>
      )}
    </div>
  );
}
