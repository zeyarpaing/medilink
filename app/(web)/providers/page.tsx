import Button from '@/components/Button';
import prisma from '@/lib/prisma';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

export default async function Page() {
  // const query = useSearchParams();
  const providerType = '';

  console.log('fetching hospitals ');
  const providers = await prisma.healthcareProvider.findMany({
    where: providerType
      ? {
          type: providerType,
        }
      : {},
  });
  // console.log(
  //   'fetched hospitals ',
  //   providers.reduce((acc: Record<(typeof providers)[number]['type'], Array<(typeof providers)[number]>>, curr) => {
  //     if (!acc[curr.type]) acc[curr.type] = [];
  //     acc[curr.type].push(curr);
  //     return acc;
  //   }, {})
  // );

  return (
    <section className="mcontainer min-h-screen py-12">
      <h1 className="header mb-4 mt-12 capitalize">Hospitals and clinics</h1>
      <p className="mb-12 text-lg font-medium">
        Medilink is used by the best healthcare providers in Myanmar. Find the best {providerType} in your area and book
      </p>
      <ul className=" grid grid-cols-1 gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <Card className="w-full !shadow-sm" isFooterBlurred key={provider.name} shadow="none">
            <CardBody className="relative h-[200px] overflow-hidden p-0 ">
              <CardHeader className="absolute top-1 z-10 h-full flex-col items-start justify-end bg-gradient-to-t from-black/50 from-15% via-black/20 via-40% to-transparent to-90%">
                <div className="px-2">
                  <h4 className="text-2xl font-bold text-white">{provider.name}</h4>
                  <span className="rounded-md bg-slate-300/80 px-1.5 py-0.5  text-sm font-medium capitalize text-slate-800">
                    {provider.type}
                  </span>
                </div>
              </CardHeader>
              <Image
                alt="Card example background"
                className="z-0 h-full w-full  object-cover"
                height={500}
                src={provider.image}
                width={500}
              />
            </CardBody>
            <CardFooter className="justify-between border border-zinc-200 bg-white/60">
              <div className="w-full px-2 pb-2">
                <p className="mb-4 text-sm text-black">{provider.description}</p>
                <div className="text-right">
                  <Button href={`/providers/${provider.id}`} isLink radius="full">
                    Visit
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
