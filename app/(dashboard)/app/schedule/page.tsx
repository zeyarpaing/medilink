import Schedules from '@/app/(dashboard)/app/schedule/Schedules';
import CTAButton from '@/components/CTAButton';
import React from 'react';

type Props = {};

export default function Page({}: Props) {
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
      <Schedules />
    </div>
  );
}
