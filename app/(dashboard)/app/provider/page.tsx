import ProviderForm from '@/app/(dashboard)/app/provider/ProviderForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) return <p>not found</p>;

  const provider = await prisma.healthcareProvider.findFirst({
    where: {
      ownerId: session?.user.id,
    },
  });

  return (
    <div className="px-4 py-5">
      <ProviderForm initialValues={{ ownerId: session?.user.id, ...provider }} />
    </div>
  );
}
