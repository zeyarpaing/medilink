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
          <Card
            className="w-full border border-zinc-400 !shadow-sm dark:border-zinc-700"
            isFooterBlurred
            key={provider.name}
            shadow="none"
          >
            <CardBody className="relative h-[200px] overflow-hidden p-0 ">
              <CardHeader className="absolute top-1 z-10 h-full flex-col items-start justify-between bg-gradient-to-t from-black/50 from-15% via-black/20 via-40% to-transparent to-90%">
                <div>
                  <span className="h-full rounded-md bg-white/90 px-1.5 py-0.5  text-sm font-medium capitalize text-primary">
                    {provider.type}
                  </span>
                </div>
                <div className="px-2">
                  <h4 className="text-2xl font-bold text-white">{provider.name}</h4>
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
            <CardFooter className="justify-between border border-zinc-200 bg-white/60 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
              <div className="w-full px-2 pb-2">
                <p className="mb-4 text-sm ">{provider.description}</p>
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
