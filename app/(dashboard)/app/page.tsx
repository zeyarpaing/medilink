import { sitemap } from '@/lib/constants';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  redirect(sitemap.app.children.profile.href);
}
