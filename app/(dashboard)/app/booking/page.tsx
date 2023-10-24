import prisma from '@/lib/prisma';
import React from 'react';

type Props = {};

export default async function Page({}: Props) {
  const data = await prisma.booking.findMany({
    where: {
      // username
    }
  })
  return <div>Page</div>;
}
