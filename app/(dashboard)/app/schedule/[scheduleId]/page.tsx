import ScheduleForm from '@/app/(dashboard)/app/schedule/[scheduleId]/ScheduleForm';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import { Schedule } from '@prisma/client';

type Props = { params: { scheduleId: string } };

export default async function Page({ params }: Props) {
  const scheduleId = params.scheduleId;
  let initialValues: Partial<Schedule> = {};

  if (scheduleId === 'new') {
    initialValues = {};
  } else {
    const schedule = await prisma.schedule.findUnique({
      where: {
        id: scheduleId,
      },
    });
    if (!schedule) {
      return <p>Schedule not found</p>;
    }
    initialValues = schedule;
  }

  const { account, provider: p } = await getProvider();
  if (!p && account?.role === 'ADMIN') return <p>Something went wrong!</p>;

  const provider = { ...p };
  if (account?.role === 'DOCTOR') {
    const doctor = await prisma.doctor.findUnique({
      where: {
        accountId: account?.id,
      },
    });
    if (!doctor) return <p>Something went wrong!</p>;
    provider.id = doctor?.healthcareProviderId!;
  }

  initialValues.providerId = provider.id;

  const services = await prisma.service.findMany({
    where: {
      healthcareProviderId: provider?.id,
    },
  });

  const doctors = await prisma.doctor.findMany({
    include: {
      Account: true,
    },
    where: {
      healthcareProviderId: provider?.id,
    },
  });

  return <ScheduleForm doctors={doctors} initialValues={initialValues} services={services} />;
}
