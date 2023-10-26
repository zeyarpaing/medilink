import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { format } from 'date-fns';
import { getServerSession } from 'next-auth';

export default async function Page({ params }: { params: { serviceId: string } }) {
  const id = params.serviceId;

  const session = await getServerSession(authOptions);

  const service = await prisma.service.findUnique({
    include: {
      schedule: true,
    },
    where: {
      id: parseInt(id),
    },
  });

  if (!service) {
    return <div>Not found</div>;
  }

  const bookings: Record<string, number> = {};
  for (const schedule of service.schedule) {
    const count = await prisma.booking.count({
      where: {
        scheduleId: schedule.id,
      },
    });
    bookings[schedule.id] = count;
  }

  return (
    <div className="mcontainer min-h-screen py-12">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">{service.name}</h1>
        <p className="text-gray-600">{service.description}</p>
      </div>

      <h2 className="mt-4 text-2xl font-semibold">Schedules</h2>
      <ul className="mt-2">
        {service.schedule.map((schedule) => (
          <li className="mt-2 rounded-md border border-gray-200 p-3 shadow-md" key={schedule.id}>
            <h3 className="text-lg font-semibold">Date: {format(schedule.dateTime, 'dd MMM yyyy')} </h3>
            <p className="mt-2 text-gray-700">
              Time: {format(schedule.dateTime, 'hh:mm a')} | Duration: {schedule.duration} minutes
            </p>
            <p className="text-bold">Booked : {bookings[schedule.id]}</p>
            <p> Max booking : {schedule.maxBooking}</p>
            {session?.user?.role === 'USER' ? (
              <CTAButton href={`${service.id}/book/${schedule.id}`} isLink>
                Book this schedule
              </CTAButton>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
