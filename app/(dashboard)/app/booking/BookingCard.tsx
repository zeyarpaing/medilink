'use client';

import { cancelBooking } from '@/app/(dashboard)/app/booking/action';
import CalendarIcon from '@/assets/icons/CalendarIcon';
import Ellipsis from '@/assets/icons/Ellipsis';
import TimerIcon from '@/assets/icons/TimerIcon';
import { openModal } from '@/lib/utils';
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
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
          <dl className="mt-2 flex flex-col text-foreground/50 xl:flex-row">
            <div className="flex items-start space-x-3">
              <dt className="mt-0.5">
                <span className="sr-only">Date</span>
                <CalendarIcon />
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
                <TimerIcon />
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
                        title: `Cancel this booking (${Service.name?.trim()})?`,
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
