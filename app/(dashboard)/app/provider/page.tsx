import ProviderForm from '@/app/(dashboard)/app/provider/ProviderForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { id } from 'date-fns/locale';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) return <p>not found</p>;

  const provider = await prisma.healthcareProvider.findFirst({
    where: {
      Admin: {
        accountId: session?.user.id,
      },
    },
  });

  return <ProviderForm initialValues={{ adminId: session?.user?.id, ...provider }} />;
}
