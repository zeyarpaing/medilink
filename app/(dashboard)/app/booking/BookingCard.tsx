'use client';

import { cancelBooking } from '@/app/(dashboard)/app/booking/action';
import Ellipsis from '@/assets/icons/Ellipsis';
import { openModal } from '@/lib/utils';
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Booking, Prisma, Schedule, Service, User } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';

const items = [
  {
    key: 'cancel',
    label: 'Cancel booking',
  },
] as const;

type Props = {
  booking: Prisma.BookingGetPayload<{
    include: {
      schedule: {
        include: {
          Doctor: {
            include: {
              Account: true;
            };
          };
          Service: true;
        };
      };
      user: {
        include: {
          Account: true;
        };
      };
    };
  }>;
};

export default function BookingCard({ booking }: Props) {
  const { Service, dateTime, duration } = booking.schedule;
  const image = Service?.image;

  const doctor = booking.schedule?.Doctor?.Account.name;
  const patient = booking.user?.Account.name;

  const { data } = useSession();
  const user = data?.user;

  const title = Service.name;

  return (
    <div className="relative flex justify-between gap-2 rounded-xl border border-zinc-500/50 p-4">
      <div className="relative flex items-center space-x-6  xl:static">
        <Image
          alt="service"
          className="h-24 w-24 flex-none rounded-xl object-cover"
          height={400}
          src={image}
          width={400}
        />
        <div className="flex-auto">
          <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:items-center">
            <h3 className="pr-10 text-lg font-semibold  xl:pr-0">{title}</h3>
            <Chip
              className="capitalize"
              color={booking.status === 'CANCELLED' ? 'danger' : 'success'}
              size="sm"
              variant="flat"
            >
              {booking.status?.toLowerCase()}
            </Chip>
          </div>
          <div className="flex items-start space-x-3">
            {user?.role === 'USER' ? (
              <p className="mt-1">
                {' '}
                Doctor: {doctor} ({booking.schedule?.Doctor?.speciality})
              </p>
            ) : (
              <p className="mt-1"> Patient: {patient}</p>
            )}
          </div>
          <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
            <div className="flex items-start space-x-3">
              <dt className="mt-0.5">
                <span className="sr-only">Date</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    clipRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    fillRule="evenodd"
                  />
                </svg>
              </dt>
              <dd>
                <time dateTime={new Date(dateTime).toISOString()}>
                  {format(new Date(dateTime), 'dd MMM yyyy')} at {format(new Date(dateTime), 'hh:mm a')}
                </time>
              </dd>
            </div>
            <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
              <dt className="mt-0.5">
                <span className="sr-only">Duration</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    fillRule="evenodd"
                  />
                </svg>
              </dt>
              <dd>{duration} minutes</dd>
            </div>
          </dl>
        </div>
      </div>
      {booking.status !== 'CANCELLED' && (
        <div className="">
          <Dropdown placement="bottom-start" size="lg">
            <DropdownTrigger>
              <Button isIconOnly type="button" variant="bordered">
                <Ellipsis />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              {items.map((item) => (
                <DropdownItem
                  className={item.key === 'cancel' ? 'text-danger' : ''}
                  color={item.key === 'cancel' ? 'danger' : 'default'}
                  key={item.key}
                  onPress={() => {
                    if (item.key === 'cancel') {
                      openModal({
                        content:
                          user?.role === 'DOCTOR'
                            ? `Are you sure you want to cancel this booking with ${patient}? Booking fees will be refunded to patient.`
                            : `Are you sure you want to cancel this booking with ${doctor}? Your booking fees will NOT be refunded.`,
                        onProceed: async () =>
                          cancelBooking(booking.id, user?.id!)
                            ?.then((res) => {
                              toast.success(res.message);
                            })
                            .catch((err) => {
                              toast.error(err);
                            }),
                        title: `Cancel this booking (${Service.name})?`,
                      });
                    }
                  }}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </div>
  );
}
