import ServiceForm from '@/app/(dashboard)/app/service/[serviceId]/ServiceForm';
import prisma from '@/lib/prisma';
import { Service } from '@prisma/client';
import { unstable_cache } from 'next/cache';

type Props = { params: { serviceId: string } };

const getService = unstable_cache(
  async (serviceId: number) => {
    const service = await prisma.service.findUnique({
      where: {
        id: +serviceId,
      },
    });
    return service;
  },
  ['service/id'],
);

export default async function Page({ params }: Props) {
  const serviceId = params.serviceId;
  let initialValues: Partial<Service> = {};

  if (serviceId === 'new') {
    initialValues = {
      bookingPrice: 0,
      description: '',
      image: '',
      minDuration: 15,
      name: '',
    };
  } else {
    const service = await getService(+serviceId);
    if (!service) {
      return <div>Not found</div>;
    }
    initialValues = service;
  }

  return <ServiceForm initialValues={initialValues} />;
}
