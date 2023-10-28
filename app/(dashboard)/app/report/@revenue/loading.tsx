import { Skeleton } from '@nextui-org/react';
import { Card, Title } from '@tremor/react';
import React from 'react';

type Props = {};

export default function Loading({}: Props) {
  return (
    <div>
      <Card className="h-72 w-full">
        <Title className="w-full font-bold">Total Booking/Revenue of the year</Title>
        <Skeleton className="h-full w-full rounded-xl" />
      </Card>
    </div>
  );
}
