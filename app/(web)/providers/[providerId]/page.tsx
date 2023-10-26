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
    <div className="mcontainer flex min-h-screen gap-10 py-12">
      <div className="flex-1">
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
          <div className="flex flex-col gap-3 text-foreground/70">
            <p>{provider.address}</p>
            <p>{provider.description}</p>
            <p>{provider.phone}</p>
            <p>{provider.email}</p>
          </div>
        </div>
      </div>
      <div className="h-screen flex-1 overflow-hidden">
        <h2 className="mb-4 text-2xl font-bold">Services Offered</h2>
        <ul className="flex h-[80vh] flex-col gap-3 overflow-auto">
          {provider.services.map((service) => (
            <li key={service.id}>
              <Link
                className="flex gap-4 rounded-xl border-2 border-zinc-400/20  px-5 py-4 transition-all duration-250 hover:border-primary "
                href={`/services/${service.id}`}
              >
                <Image
                  alt={service.name}
                  className="w-40 rounded-lg object-cover"
                  height={1000}
                  src={service.image}
                  width={1000}
                />
                <div>
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="mt-1 opacity-80">{service.description}</p>
                  {/* <div className="my-2 ">
                    <p className="text-xs font-semibold uppercase text-foreground/50">Booking fees</p>{' '}
                    <p className="text-lg">{service.bookingPrice} MMK </p>
                  </div> */}
                  <div className="mt-5 ">
                    <p className="text-xs font-semibold uppercase text-foreground/50">Minimum duration</p>{' '}
                    <p className="text-lg">{service.minDuration} minutes </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
