import ProviderForm from '@/app/(dashboard)/app/provider/ProviderForm';
import { getProvider } from '@/lib/services';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { account, provider } = await getProvider();
  if (!account?.id) return <p>not found</p>;

  return <ProviderForm initialValues={{ adminId: account?.id, ...provider }} />;
}
