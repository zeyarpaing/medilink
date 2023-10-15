import { getServerSession } from 'next-auth';
import React from 'react';

export default async function Page() {
  const session = await getServerSession();
  if (session?.user?.role !== 'ADMIN') return <>This is provider page</>;
}
