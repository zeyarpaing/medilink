import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Page({ params }: { params: { providerId: string } }) {
  const id = params.providerId;
  if (!+id) return <div>Not found</div>;
  const provider = await prisma.healthcareProvider.findUnique({
    include: {
      services: true,
    },
    where: {
      id: parseInt(id),
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
            alt={provider.name}
            className="h-full w-full rounded-xl object-cover"
            height={1000}
            src={provider.image}
            width={3033}
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
            <Link href={`/services/${service.id}`}>
              <h3 className="text-lg font-bold">{service.name}</h3>
              <p className="mt-1 opacity-80">{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
