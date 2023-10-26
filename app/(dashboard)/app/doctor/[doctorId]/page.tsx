import Copy from '@/app/(dashboard)/app/doctor/[doctorId]/Copy';
import prisma from '@/lib/prisma';
import { getProvider } from '@/lib/services';
import { base64Hash } from '@/lib/utils';
import { Input } from '@nextui-org/input';
import { headers } from 'next/headers';
import Link from 'next/link';

type Props = {
  params: {
    doctorId: string;
  };
};

export default async function NormalRoute({ params }: Props) {
  const headersInstance = headers();
  const host = headersInstance.get('host');

  const { account, provider } = await getProvider();
  if (!provider) return <p>You need to setup your healthcare provider first.</p>;

  const hash = base64Hash(provider.slug);
  const url = new URL('app/join/' + hash, (process.env.NODE_ENV === 'development' ? 'http' : 'https') + '://' + host!);

  const doctorId = params.doctorId;
  if (doctorId === 'new') {
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
  const doctor = await prisma.doctor.findUnique({
    include: { Account: true },
    where: {
      accountId: account?.id,
    },
  });
  return (
    <div>
      <Link href="/app/doctor">
        <h1 className="text-2xl font-bold ">
          {'<'} {doctor?.Account.name}
        </h1>
      </Link>
    </div>
  );
}
