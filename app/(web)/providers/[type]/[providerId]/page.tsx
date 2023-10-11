import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Page({ params }: { params: { providerId: string } }) {
  const id = params.providerId;
  if (!+id) return <div>Not found</div>;
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
    <div className="mcontainer min-h-screen py-12">
      <div>
        <div className="h-[32rem] w-full">
          <Image
            src={provider.image}
            height={1000}
            className="h-full w-full rounded-xl object-cover"
            width={3033}
            alt={provider.name}
          />
        </div>
        <div className="my-8">
          <h1 className="mb-2 text-3xl font-black">{provider.name}</h1>
          <p className="text-gray-600">{provider.address}</p>
          <p className="mt-2 text-gray-700">{provider.description}</p>
          <p className="mt-2 text-gray-700">{provider.phone}</p>
          <p className="mt-2 text-gray-700">{provider.email}</p>
        </div>
      </div>
      <h2 className="mb-4 mt-6 text-2xl font-bold">Services Offered</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {provider.services.map((service) => (
          <li
            className=" rounded-lg  border border-gray-200 px-6 py-4 shadow-md  transition-all duration-250 hover:bg-primary hover:text-white"
            key={service.id}
          >
            <Link href={`/providers/services/${service.id}`}>
              <h3 className="text-lg font-bold">{service.name}</h3>
              <p className="mt-1 opacity-80">{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
