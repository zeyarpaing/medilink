import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Page({ params }: { params: { providerId: string } }) {
  const id = params.providerId;

  const provider = await prisma.healthcareProvider.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      services: true,
    },
  });

  if (!provider) {
    return <div>Not found</div>;
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">{provider.name}</h1>
        <p className="text-gray-600">{provider.address}</p>
        <p className="mt-2 text-gray-700">{provider.description}</p>
        <p className="mt-2 text-gray-700">{provider.phone}</p>
        <p className="mt-2 text-gray-700">{provider.email}</p>
      </div>

      <h2 className="mt-4 text-2xl font-semibold">Services Offered</h2>
      <ul className="mt-2">
        {provider.services.map((service) => (
          <li className="mt-2 rounded-md border border-gray-200 p-3 shadow-md hover:bg-gray-200" key={service.id}>
            <Link href={`/providers/services/${service.id}`}>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
