import CTAButton from '@/components/CTAButton';
import { Button } from '@nextui-org/react';
import prisma from '@/lib/prisma';

export default async function Page({ params }: { params: { serviceId: string } }) {
  const id = params.serviceId;

  const service = await prisma.service.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      schedule: true,
    },
  });

  if (!service) {
    return <div>Not found</div>;
  }
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">{service.name}</h1>
        <p className="text-gray-600">{service.description}</p>
      </div>

      <h2 className="mt-4 text-2xl font-semibold">Schedules</h2>
      <ul className="mt-2">
        {service.schedule.map((schedule) => (
          <li className="mt-2 rounded-md border border-gray-200 p-3 shadow-md" key={schedule.id}>
            <h3 className="text-lg font-semibold">Date: {schedule.date.toLocaleDateString()}</h3>
            <p className="mt-2 text-gray-700">
              Time: {schedule.time.toLocaleTimeString()} | Duration: {schedule.duration} minutes
            </p>
            <CTAButton href={`${service.id}/book/${schedule.id}`} as={'a'}>
              Book this schedule
            </CTAButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
