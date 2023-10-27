import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CTAButton from '@/components/CTAButton';
import prisma from '@/lib/prisma';
import { Chip } from '@nextui-org/chip';
import { format } from 'date-fns';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { serviceId: string } }) {
  const id = +params.serviceId;

  const session = await getServerSession(authOptions);

  const service =
    !isNaN(id) && typeof id === 'number'
      ? await prisma.service.findUnique({
          include: {
            schedule: {
              include: {
                Booking: true,
                Doctor: {
                  include: {
                    Account: true,
                  },
                },
              },
            },
          },
          where: {
            id,
          },
        })
      : null;

  if (!service) notFound();

  const labelClass = `text-xs font-semibold uppercase text-foreground/50`;
  return (
    <div className="mcontainer flex min-h-screen flex-col gap-10 py-12 md:flex-row">
      <div className="flex-1">
        <div className="h-[32rem] w-full">
          <Image
            alt={service.name}
            className="h-full w-full rounded-xl object-cover"
            height={1000}
            src={service.image}
            width={3033}
          />
        </div>
        <div className="my-8">
          <h1 className="mb-2 text-3xl font-black">{service.name}</h1>
          <div className="flex flex-col gap-3 text-foreground/70">
            <p>{service.description}</p>
          </div>
        </div>
      </div>
      <div className="h-screen flex-1 overflow-hidden">
        <h2 className="mb-4 text-2xl font-bold">Schedules</h2>
        <ul className="flex h-[80vh] flex-col gap-3 overflow-auto">
          {service.schedule.map((schedule) => (
            <li key={schedule.id}>
              <div className=" rounded-xl border-2 border-zinc-400/20 px-5 py-4">
                <div className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="inline-block text-xl font-semibold">
                        {format(schedule.dateTime, 'dd MMM yyyy')}{' '}
                      </h3>
                      <p className="inline-block pl-3 text-lg text-foreground/70">
                        {format(schedule.dateTime, 'hh:mm a')} (Local time)
                      </p>
                    </div>
                    <Chip
                      className="capitalize"
                      color={schedule.Booking?.length < schedule.maxBooking ? 'success' : 'warning'}
                      size="sm"
                      variant="flat"
                    >
                      {schedule.Booking?.length < schedule.maxBooking ? 'Available' : 'Fully booked'}
                    </Chip>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="my-2 ">
                      <p className={labelClass}>Duration</p> <p className="text-lg">{schedule.duration} minutes </p>
                    </div>
                    <div className="my-2 text-right">
                      <p className={labelClass}>Bookings</p>
                      <p className="text-lg">
                        {schedule.Booking?.length} / {schedule.maxBooking}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="my-2 ">
                      <p className={labelClass}>Booking fees</p> <p className="text-lg">{schedule.bookingPrice} USD </p>
                    </div>
                    <div className="my-2 text-right">
                      <p className={labelClass}>Duration</p> <p className="text-lg">{schedule.duration} minutes </p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="my-2 ">
                      <p className={labelClass}>Doctor</p>{' '}
                      <p className="text-lg">Dr. {schedule.Doctor?.Account.name}</p>
                    </div>
                    {session?.user?.role === 'USER' ? (
                      <CTAButton href={`${service.id}/book/${schedule.id}`} isLink>
                        Book
                      </CTAButton>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // return (
  //   <div className="mcontainer min-h-screen py-12">
  //     <div className="mb-4">
  //       <h1 className="text-3xl font-semibold">{service.name}</h1>
  //       <p className="text-foreground/70">{service.description}</p>
  //     </div>

  //     <h2 className="mt-4 text-2xl font-semibold">Schedules</h2>
  //     <ul className="mt-2">
  //       {service.schedule.map((schedule) => (
  //         <li className="mt-2 rounded-md border border-gray-200 p-3 shadow-md" key={schedule.id}>
  //           <h3 className="text-lg font-semibold">Date: {format(schedule.dateTime, 'dd MMM yyyy')} </h3>
  //           <p className="mt-2 text-foreground/70">
  //             Time: {format(schedule.dateTime, 'hh:mm a')} | Duration: {schedule.duration} minutes
  //           </p>
  //           <p className="text-bold">Booked : {bookings[schedule.id]}</p>
  //           <p> Max booking : {schedule.maxBooking}</p>
  //           {session?.user?.role === 'USER' ? (
  //             <CTAButton href={`${service.id}/book/${schedule.id}`} isLink>
  //               Book this schedule
  //             </CTAButton>
  //           ) : null}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
