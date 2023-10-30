import Copy from '@/app/(dashboard)/app/doctor/[doctorId]/Copy';
import SetupProvider from '@/components/SetupProvider';
import prisma from '@/lib/prisma';
import { $cache, getProvider } from '@/lib/services';
import { base64Hash } from '@/lib/utils';
import { Input } from '@nextui-org/input';
import { tr } from 'date-fns/locale';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    doctorId: string;
  };
};

const getDoctor = $cache((doctorId: string) =>
  prisma.doctor.findUnique({
    include: {
      Account: true,
      Schedule: {
        include: {
          Booking: true,
        },
      },
    },
    where: {
      id: doctorId,
    },
  }),
);

export default async function NormalRoute({ params }: Props) {
  const headersInstance = headers();
  const host = headersInstance.get('host');

  const { provider } = await getProvider();
  if (!provider) return <SetupProvider />;

  const doctorId = params.doctorId;
  if (doctorId === 'new') {
    const hash = base64Hash(provider.slug);
    const url = new URL(
      'app/join/' + hash,
      (process.env.NODE_ENV === 'development' ? 'http' : 'https') + '://' + host!,
    );

    return (
      <>
        <Link href="/app/doctor">
          <h1 className="text-2xl font-bold "> {'<'} Invite doctor</h1>
        </Link>
        <p className="mt-2 text-sm">Copy and send the following link to the doctor you want to invite</p>
        <div className="mt-4">
          <Input
            classNames={{
              inputWrapper: '!pr-0',
            }}
            endContent={<Copy url={url.href} />}
            type="text"
            value={url.href}
            variant="faded"
          />
        </div>
      </>
    );
  }

  const doctor = await getDoctor(doctorId);

  return (
    <div>
      <Link href="/app/doctor">
        <h1 className="text-2xl font-bold ">
          {'<'} Dr. {doctor?.Account.name}
        </h1>
      </Link>
      {doctor?.Account.image ? (
        <Image
          alt={doctor?.Account.name!}
          className="h-56 w-full rounded-xl object-cover"
          height={500}
          src={doctor?.Account.image!}
          width={1000}
        />
      ) : (
        ''
      )}
      <p className="my-2 text-foreground/80">Speciality: {doctor?.speciality}</p>
      <p className="my-2 text-foreground/80">Phone: {doctor?.Account.phone}</p>
      <p className="my-2 text-foreground/80">Email: {doctor?.Account.email}</p>
      <p className="my-2 text-foreground/80">Schedules assigned: {doctor?.Schedule.length}</p>
      <p className="my-2 text-foreground/80">
        Total bookings: {doctor?.Schedule.reduce((acc, schedule) => acc + schedule.Booking.length, 0)}
      </p>

      <h2 className="mb-1 mt-3 text-lg font-bold">Certification</h2>
      {doctor?.certification ? (
        <Link
          className="text-blue-600 underline "
          href={doctor?.certification!}
          target="_blank"
          title="Open in new tab"
        >
          {doctor?.certification}
        </Link>
      ) : (
        <p className="my-2 text-foreground/80">No certification uploaded</p>
      )}
    </div>
  );
}
