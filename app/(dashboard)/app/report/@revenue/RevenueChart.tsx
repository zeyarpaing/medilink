'use client';

import { Select, SelectItem, Selection } from '@nextui-org/react';
import { AreaChart, Card, Title } from '@tremor/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const categories = ['Booking', 'Revenue'];
const chartData = Array.from({ length: 12 }, (_, i) => ({
  date: months[i],
  Booking: Math.floor(Math.random() * 100),
  Revenue: Math.floor(Math.random() * 100),
}));

export const RevenueChart = ({
  data,
}: {
  data: {
    date: string;
    Booking: number;
    Revenue: number;
  }[];
}) => {
  const [year, setYear] = useState<Selection>(new Set(['' + new Date().getFullYear()]));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <Card>
        <div className="flex">
          <Title className="w-full font-bold">Total Booking/Revenue of the year</Title>
          <div className="flex w-full justify-end">
            <Select
              variant="bordered"
              size="sm"
              classNames={{
                trigger: 'rounded-lg',
              }}
              selectedKeys={year}
              className="max-w-xs"
              onSelectionChange={setYear}
              onChange={(e) => {
                const value = e.target.value;
                const current = new URLSearchParams(Array.from(searchParams.entries()));
                current.set('year', value || '');
                const s = current.toString();
                router.replace(`${pathname}?${s}`);
              }}
              label="Year"
            >
              {Array.from({ length: 5 }, (_, i) => {
                const currentYear = new Date().getFullYear();
                const year = `${currentYear - i}`;
                return (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
        </div>
        <AreaChart
          className="mt-4 h-72"
          data={data}
          index="date"
          categories={categories}
          colors={['blue', 'emerald']}
          yAxisWidth={30}
          onValueChange={(v) => {}}
          connectNulls={true}
        />
      </Card>
    </>
  );
};
