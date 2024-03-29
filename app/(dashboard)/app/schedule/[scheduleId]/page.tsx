import ScheduleForm from '@/app/(dashboard)/app/schedule/[scheduleId]/ScheduleForm';
import SetupProvider from '@/components/SetupProvider';
import prisma from '@/lib/prisma';
import { $cache, getDoctorsOfProvider, getProvider, getServicesOfProvider } from '@/lib/services';
import { Schedule } from '@prisma/client';

type Props = { params: { scheduleId: string } };

const getSchedule = $cache(async (scheduleId: string) => {
  const schedule = await prisma.schedule.findUnique({
    where: {
      id: scheduleId,
    },
  });
  return schedule;
});

const getScheduleDoctor = $cache((accountId: string) =>
  prisma.doctor.findUnique({
    where: {
      accountId: accountId,
    },
    include: {
      Account: true,
    },
  }),
);

export default async function Page({ params }: Props) {
  const scheduleId = params.scheduleId;
  let initialValues: Partial<Schedule> = {};
  if (scheduleId === 'new') {
    initialValues = {
      maxBooking: 1,
    };
  } else {
    const schedule = await getSchedule(scheduleId);
    if (!schedule) {
      return <p>Schedule not found</p>;
    }
    initialValues = schedule;
  }
  const { account, provider: p } = await getProvider();

  if (!p && account?.role === 'ADMIN') return <SetupProvider />;

  const provider = { ...p };
  let doctor = null;
  if (account?.role === 'DOCTOR') {
    doctor = await getScheduleDoctor(account?.id!);
    if (!doctor) return <p>Something went wrong!</p>;
    provider.id = doctor?.healthcareProviderId!;
  }

  initialValues.providerId = provider.id;

  const doctors = account?.role === 'DOCTOR' ? [doctor!] : await getDoctorsOfProvider(provider.id!);
  const services = await getServicesOfProvider(provider.id!);

  return <ScheduleForm doctors={doctors} initialValues={initialValues} services={services} />;
}
