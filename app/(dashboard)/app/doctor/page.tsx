import CTAButton from '@/components/CTAButton';
import EmptyState from '@/components/EmptyState';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import React from 'react';

type Props = {};

export default async function page({}: Props) {
  const { provider } = await getProvider();
  const doctors = await prisma.doctor.findMany({
    where: {
      healthcareProviderId: provider?.id,
    },
  });

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Doctors</h1>
          <p className="text-sm text-gray-500">Manage your doctors</p>
        </div>
        <div>
          <CTAButton className="px-5 text-base" href="schedule/new" isLink>
            + Invite doctors
          </CTAButton>
        </div>
      </div>
      <div className="my-12">
        {doctors?.length > 0 ? (
          <></>
        ) : (
          <EmptyState
            action={{
              label: 'Invite doctors',
              link: 'doctor/new',
            }}
            description="Invite doctors to your healthcare provider"
            title="No doctors yet"
          />
        )}
      </div>
    </div>
  );
}
