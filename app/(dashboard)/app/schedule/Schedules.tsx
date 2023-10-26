'use client';

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
      <div className="flex flex-row-reverse justify-between">
        <div className="rounded-xl border">
          <DayPicker
            captionLayout="dropdown-buttons"
            classNames={{ day_selected: '!bg-primary !text-white', day_today: '!border !border-primary/70' }}
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
            <EmptyState description={'There is no schedules yet for selected date'} title={'Empy schedule'} />
          </div>
        ) : (
          <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            {schedules.map((schedule) => (
              <li key={schedule.id}>
                <Link
                  className="relative flex items-center space-x-6 py-6 xl:static"
                  href={role === 'ADMIN' ? `schedule/${schedule.id}` : `#`}
                >
                  <Image
                    alt="service"
                    className="h-24 w-24 flex-none rounded-xl object-cover"
                    height={200}
                    src={schedule.Service.image}
                    width={200}
                  />
                  <div className="flex-auto">
                    <h3 className="pr-10 text-lg font-semibold text-gray-900 xl:pr-0">{schedule.Service.name}</h3>
                    <div className="flex items-start space-x-3">
                      <p className="mt-1"> Doctor: {schedule.Doctor?.Account.name}</p>
                    </div>
                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div className="flex items-center space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            <path
                              clipRule="evenodd"
                              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </dt>
                        <dd>
                          <time dateTime={schedule.dateTime.toISOString()}>
                            {format(schedule.dateTime, 'dd MMM yyyy')} at {format(schedule.dateTime, 'hh:mm a')}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-2 flex items-center space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                        <dt className="mt-0.5">
                          <span className="sr-only">Duration</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </dt>
                        <dd>{schedule.duration} minutes</dd>
                      </div>
                    </dl>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
