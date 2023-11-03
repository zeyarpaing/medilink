import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import EmptyState from '@/components/EmptyState';
import SetupProvider from '@/components/SetupProvider';
import prisma from '@/lib/prisma';
import { $cache, getProvider } from '@/lib/services';
import React from 'react';

type Props = {};
// export const dynamic = 'force-dynamic';

const getDoctors = $cache(
  (providerId?: number) =>
    prisma.doctor.findMany({
      include: {
        Account: true,
      },
      where: {
        healthcareProviderId: providerId || 0,
      },
    }),
  ['doctors'],
);

export default async function page({}: Props) {
  const { provider } = await getProvider();

  if (!provider) return <SetupProvider />;

  const doctors = await getDoctors(provider?.id);

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Doctors</h1>
          <p className="text-sm text-gray-500">Manage your doctors</p>
        </div>
        <div>
          <CTAButton className="px-5 text-base" href="doctor/new" isLink>
            + Invite doctors
          </CTAButton>
        </div>
      </div>
      <div className="my-4">
        {doctors?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Card
                description={doctor.speciality}
                image={doctor.Account.image!}
                key={doctor.id}
                link={`/app/doctor/${doctor.id}`}
                title={'Dr. ' + doctor.Account.name!}
              />
            ))}
          </div>
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
