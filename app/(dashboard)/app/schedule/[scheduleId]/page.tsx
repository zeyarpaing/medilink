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
      return <div>Not found</div>;
    }
    initialValues = schedule;
  }

  const provider = await getProvider();
  if (!provider) return <div>Not found</div>;

  const services = await prisma.service.findMany({
    where: {
      healthcareProviderId: provider?.id,
    },
  });

  return <ScheduleForm initialValues={initialValues} services={services} />;
}
