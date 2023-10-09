import { CardHeader, CardFooter, CardBody, Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import prisma from '@/lib/prisma';
import Image from 'next/image';

export const dynamic = 'force-static';
const providers = {
  hospitals: [
    {
      image:
        'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
      description: 'Enjoy the convenience of healthier life today.',
      name: 'ArYu Hospital',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80',
      description: 'The biggest hospital with the best doctors in Myanmar.',
      name: 'PunHlaing Hospital',
    },
    {
      image:
        'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      description: 'Enjoy the convenience of healthier life today.',
      name: 'Thukha Hospital',
    },
  ],
  clinics: [
    {
      image:
        'https://images.unsplash.com/photo-1631248207065-771ae9ac32f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      description: 'Enjoy the convenience of healthier life today.',
      name: 'Hanthar clinic',
    },
    {
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
      description: 'Enjoy the convenience of healthier life today.',
      name: 'New day clinic',
    },
    {
      image:
        'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Enjoy the convenience of healthier life today.',
      name: 'KyiKone clinic',
    },
  ],
};

export default async function Page({ params }: { params: { type: 'hospitals' | 'clinics' } }) {
  const providerType = params.type;

  console.log('fetching hospitals ');
  const providers = await prisma.healthcareProvider.findMany({
    where: {
      type: providerType,
    },
  });
  console.log('fetched hospitals ');

  return (
    <section className="mcontainer min-h-screen py-12">
      <h1 className="header mb-4 mt-12 capitalize">{providerType}</h1>
      <p className="mb-12 text-lg font-medium">
        Medilink is used by the best healthcare providers in Myanmar. Find the best {providerType} in your area and book
      </p>
      <ul className=" grid grid-cols-1 gap-6 pb-12 md:grid-cols-3">
        {providers.map((provider) => (
          <Card className="w-full !shadow-sm" key={provider.name} isFooterBlurred shadow="none">
            <CardBody className="relative h-[200px] overflow-hidden p-0 ">
              <CardHeader className="absolute top-1 z-10 h-full flex-col items-start justify-end bg-gradient-to-t from-black/50 from-15% via-black/20 via-40% to-transparent to-90%">
                <div className="px-2">
                  <h4 className="text-2xl font-bold text-white">{provider.name}</h4>
                </div>
              </CardHeader>
              <Image
                className="z-0 h-full w-full  object-cover"
                alt="Card example background"
                src={provider.image}
                height={500}
                width={500}
              />
            </CardBody>
            <CardFooter className="justify-between border border-zinc-200 bg-white/60">
              <div className="w-full px-2 pb-2">
                <p className="mb-4 text-sm text-black">{provider.description}</p>
                <div className="text-right">
                  <Button
                    href={`/providers/${providerType}/${provider.id}`}
                    className="px-8 text-sm"
                    color="primary"
                    radius="full"
                    size="md"
                    as="a"
                  >
                    Visit
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </ul>

      {/* <ul className="grid grid-cols-1 gap-4  md:grid-cols-3">
        {[...providers[providerType], ...providers[providerType].reverse(), ...providers[providerType]].map(
          (plan, idx) => (
            <li key={plan.name}>
              <article className="relative h-[21rem] overflow-hidden rounded-lg sm:h-80">
                <Image
                  className="pointer-events-none h-full w-full select-none object-cover"
                  src={plan.image}
                  alt={plan.name}
                  height={340}
                  width={400}
                />
                <div className="absolute bottom-0 m-2 flex flex-col gap-2 rounded-lg bg-white/70 p-3 px-4 backdrop-blur-md sm:m-4 sm:p-4 sm:px-5">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p>{plan.description}</p>
                  <Button className="w-full" color="primary" size="md">
                    View {plan.name}
                  </Button>
                </div>
              </article>
            </li>
          )
        )}
      </ul> */}
    </section>
  );
}
