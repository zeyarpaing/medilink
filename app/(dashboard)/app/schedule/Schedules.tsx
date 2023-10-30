'use client';

import CalendarIcon from '@/assets/icons/CalendarIcon';
import TimerIcon from '@/assets/icons/TimerIcon';
import EmptyState from '@/components/EmptyState';
import { Prisma, Role } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type ScheduleWithDoctor = Prisma.ScheduleGetPayload<{
  include: {
    Doctor: {
      include: {
        Account: true;
      };
    };
    Service: true;
  };
}>;

type Props = { role: Role; schedules: ScheduleWithDoctor[] };

export default function Schedules({ role, schedules }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse md:justify-between">
        <div className="h-fit w-fit rounded-xl border">
          <DayPicker
            captionLayout="dropdown-buttons"
            classNames={{
              day_selected: '!bg-primary !text-white',
              day_today: '!border !border-primary/70',
            }}
            mode="single"
            onSelect={(value) => {
              const current = new URLSearchParams(Array.from(searchParams.entries()));
              current.set('date', value ? format(value, 'yyyy-MM-dd') : '');
              const s = current.toString();
              router.replace(`${pathname}?${s}`);
            }}
            selected={searchParams.get('date') ? new Date(searchParams.get('date') ?? '') : undefined}
          />
        </div>
        {schedules.length === 0 ? (
          <div>
            <EmptyState
              description={'There is no schedules yet ' + (searchParams.get('date') ? 'for selected date' : '')}
              title={'Empy schedule'}
            />
          </div>
        ) : (
          <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            {schedules.map((schedule) => {
              return (
                <li key={schedule.id}>
                  <Link
                    className="relative flex items-center space-x-6 py-6 xl:static"
                    href={`schedule/${schedule.id}`}
                  >
                    <Image
                      alt="service"
                      className="h-24 w-24 flex-none rounded-xl object-cover"
                      height={200}
                      src={schedule.Service.image}
                      width={200}
                    />
                    <div className="flex-auto">
                      <h3 className="pr-10 text-lg font-semibold xl:pr-0">{schedule.Service.name}</h3>
                      <div className="flex items-start space-x-3">
                        <p className="mt-1"> Doctor: {schedule.Doctor?.Account.name}</p>
                      </div>
                      <dl className="mt-2 flex flex-col text-foreground/50 xl:flex-row">
                        <div className="flex items-center space-x-2">
                          <dt className="mt-0.5">
                            <span className="sr-only">Date</span>
                            <CalendarIcon />
                          </dt>
                          <dd>
                            <time dateTime={new Date(schedule.dateTime).toISOString()}>
                              {format(new Date(schedule.dateTime), 'dd MMM yyyy')} at{' '}
                              {format(new Date(schedule.dateTime), 'hh:mm a')}
                            </time>
                          </dd>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                          <dt className="mt-0.5">
                            <span className="sr-only">Duration</span>
                            <TimerIcon />
                          </dt>
                          <dd>{schedule.duration} minutes</dd>
                        </div>
                      </dl>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
