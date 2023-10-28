import { RevenueChart } from '@/app/(dashboard)/app/report/@revenue/RevenueChart';
import prisma from '@/lib/prisma';
import { $cache, getProvider } from '@/lib/services';
import { sqltag } from '@prisma/client/runtime/library';

const getRevenueReport = $cache(async (providerId: number, year: number) => {
  const report: Array<{ bookingPrice: number; bookings: number; month: number }> = await prisma.$queryRaw`
   SELECT
 	"Schedule"."bookingPrice"
    , COUNT("Booking".id)::int as Bookings
    , EXTRACT(MONTH FROM "Schedule"."dateTime") as Month
FROM
    "Schedule" 
JOIN "Service" ON "Schedule"."serviceId" = "Service".id
JOIN "Booking" ON "Booking"."scheduleId" = "Schedule"."id"

WHERE "Service"."healthcareProviderId" = ${providerId} AND 
EXTRACT(YEAR FROM "Schedule"."dateTime") = ${year}

GROUP BY
	"Schedule".id,
     EXTRACT(MONTH FROM "Schedule"."dateTime")
  `;
  return report;
});

export default async function Page({
  searchParams,
}: {
  params: {};
  searchParams: {
    year?: string;
  };
}) {
  const year = +(searchParams?.year ?? new Date().getFullYear());
  const { provider } = await getProvider();
  const report = await getRevenueReport(provider?.id!, year);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const groupedReport = report.reduce((acc, curr) => {
    if (!acc[curr.month]) acc[curr.month] = { Booking: curr.bookings, Revenue: curr.bookingPrice * curr.bookings };
    else {
      acc[curr.month].Booking += curr.bookings;
      acc[curr.month].Revenue += curr.bookingPrice * curr.bookings;
    }
    return acc;
  }, {} as any);
  const chartData = months.map((month, i) => ({
    date: month,
    ...{ Booking: 0, Revenue: 0, ...groupedReport[i + 1] },
  }));

  return (
    <>
      <RevenueChart data={chartData} />
    </>
  );
}
