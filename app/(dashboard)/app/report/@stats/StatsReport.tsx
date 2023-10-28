'use client';
import { Card, CategoryBar, Legend, Metric, Text } from '@tremor/react';

export default function StatsReports() {
  return (
    <Card className="mx-auto max-w-md">
      <Text>Total Users</Text>
      <Metric>10,483</Metric>
      <CategoryBar className="mt-4" values={[6724, 3621]} colors={['emerald', 'red']} />
      <Legend className="mt-3" categories={['Active users', 'Inactive users']} colors={['emerald', 'red']} />
    </Card>
  );
}
