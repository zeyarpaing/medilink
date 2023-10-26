import Schedules from '@/app/(dashboard)/app/schedule/Schedules';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import { endOfDay, startOfDay } from 'date-fns';
import React from 'react';

type Props = {
  params: any;
  searchParams: {
    date?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const date = searchParams?.date;
  const { account, provider } = await getProvider();

  const schedules = await prisma.schedule.findMany({
    include: {
      Doctor: {
        include: {
          Account: true,
        },
      },
      Service: true,
    },
    where:
      account?.role === 'DOCTOR'
        ? {
            Doctor: {
              accountId: account?.id,
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
            providerId: provider?.id,
          },
  });

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
      {/* @ts-ignore */}
      <Schedules role={account?.role} schedules={schedules} />
    </div>
  );
}
