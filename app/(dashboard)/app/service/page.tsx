import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Button from '@/components/Button';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import React from 'react';

type Props = {};

export default async function Page({}: Props) {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) return <p>not found</p>;

  const provider = await prisma.healthcareProvider.findFirst({
    where: {
      ownerId: session?.user.id,
    },
  });

  const services = await prisma.service.findMany({
    where: {
      healthcareProviderId: provider?.id,
    },
  });

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
        <div>
          <h1 className="text-2xl font-bold ">Services</h1>
          <p className="text-sm text-gray-500">Manage your provided services</p>
        </div>
        <div>
          <CTAButton className="px-5 text-base" href="service/new" isLink>
            + New service
          </CTAButton>
        </div>
      </div>
      <section className="relative z-0 mb-6 flex flex-col gap-4">
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
