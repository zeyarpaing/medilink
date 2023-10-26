import Join from '@/app/(dashboard)/app/join/[hash]/Join';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { base64Hash } from '@/lib/utils';
import { getServerSession } from 'next-auth';

async function joinProvider({ doctorId, providerId }: { doctorId: string; providerId: number }) {
  'use server';
  return prisma.doctor
    .update({
      data: {
        HealthcareProvider: {
          connect: {
            id: +providerId,
          },
        },
      },
      where: {
        accountId: doctorId,
      },
    })
    .then(() => {
      return {
        message: 'Joined successfully',
      };
    })
    .catch(() => {
      throw new Error('Something went wront. Please try again.');
    });
}

export default async function JoinPage({ params }: { params: { hash: string }; searchParams: {} }) {
  const hash = params.hash;
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== 'DOCTOR') return <p>You need to be a doctor to join a healthcare provider.</p>;

  const providers = await prisma.healthcareProvider.findMany();
  const provider = providers.find((provider) => base64Hash(provider.slug) === hash);

  if (!provider)
    return (
      <>
        <h1 className="text-2xl font-bold">Invalid link</h1>
        <p>
          The link to join the healthcare provider is borken. Please request new link form healthcare provider admin.
        </p>
      </>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold ">
        Join <b className="text-primary">{provider.name}</b>
      </h1>
      <p className="my-2">
        Congratulations 🎉 You have been invited to join <b>{provider.name}</b> as a doctor.
      </p>
      <Join joinProvider={joinProvider.bind(null, { doctorId: session.user.id!, providerId: provider.id })} />
    </div>
  );
}
