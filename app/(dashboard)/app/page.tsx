import { sitemap } from '@/lib/constants';
import { getAccount } from '@/lib/services';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const account = await getAccount();
  const route = Object.values(sitemap.app.children).find((route) =>
    (route.role as unknown as Role[]).includes(account?.role!),
  );
  redirect(route?.href!);
}
