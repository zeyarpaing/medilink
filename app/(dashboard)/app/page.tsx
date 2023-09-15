import prisma from '@/lib/prisma';

export default async function Dashboard() {
  const users = await prisma.user.findFirst();
  return <div className="text-2xl font-extrabold text-red-600">This is dashboard page</div>;
}
