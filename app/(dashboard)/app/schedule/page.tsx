import Schedules from '@/app/(dashboard)/app/schedule/Schedules';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import React from 'react';

type Props = {};

export default async function Page({}: Props) {
  const provider = await getProvider();
  const schedules = await prisma.schedule.findMany({
    include: {
      Service: true,
      User: true,
    },
    where: {
      providerId: provider?.id,
    },
  });

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Schedules</h1>
          <p className="text-sm text-gray-500">Manage your provided services</p>
        </div>
        <div>
          <CTAButton className="px-5 text-base" href="schedule/new" isLink>
            + New schedule
          </CTAButton>
        </div>
      </div>
      {/* @ts-ignore */}
      <Schedules schedules={schedules} />
    </div>
  );
}
