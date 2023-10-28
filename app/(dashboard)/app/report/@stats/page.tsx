import StatsReports from '@/app/(dashboard)/app/report/@stats/StatsReport';
import prisma from '@/lib/prisma';
import { $cache, getProvider } from '@/lib/services';
import React from 'react';

type Props = {};

const getStatsReport = $cache(async (providerId: number) => {
  const doctorCount = await prisma.doctor.count({
    where: {
      healthcareProviderId: providerId,
    },
  });
  const patientCount = await prisma.user.count({
    where: {
      Booking: {
        some: {
          schedule: {
            Service: {
              healthcareProviderId: providerId,
            },
          },
        },
      },
    },
  });
  return { doctorCount, patientCount };
});

export default async function ReportPage() {
  const { provider } = await getProvider();
  const report = await getStatsReport(provider?.id!);

  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Statstics</h1>
      <StatsReports data={report} />
    </>
  );
}
