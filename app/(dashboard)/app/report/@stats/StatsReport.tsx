'use client';
import { Card, CategoryBar, Legend, Metric, Text } from '@tremor/react';

export default function StatsReports({
  data,
}: {
  data: {
    doctorCount: number;
    patientCount: number;
  };
}) {
  return (
    <Card className="mb-8 max-w-md">
      <Text>Total Users</Text>
      <Metric>{data.doctorCount + data.patientCount}</Metric>
      <CategoryBar className="mt-4" values={[data.patientCount, data.doctorCount]} colors={['emerald', 'red']} />
      <Legend className="mt-3" categories={['Patients', 'Doctors']} colors={['emerald', 'red']} />
    </Card>
  );
}
