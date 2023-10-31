import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';

export default async function Loading() {
  return (
    <section className="mcontainer min-h-screen py-12">
      <h1 className="header mb-4 mt-12">Hospitals and clinics</h1>
      <ul className=" grid grid-cols-1 gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Card
              className="w-full border border-zinc-400 !shadow-sm dark:border-zinc-700"
              isFooterBlurred
              key={i}
              shadow="none"
            >
              <CardBody className="relative h-[200px] overflow-hidden p-0 ">
                <CardHeader className="absolute top-1 z-10 h-full flex-col items-start justify-between bg-gradient-to-t from-black/50 from-15% via-black/20 via-40% to-transparent to-90%">
                  <Skeleton className="h-5 w-8 rounded-md ">
                    <span className="h-full rounded-md bg-white/90 px-1.5 py-0.5  text-sm font-medium capitalize text-primary"></span>
                  </Skeleton>
                  <Skeleton className="px-2">
                    <h4 className="text-2xl font-bold text-white"> </h4>
                  </Skeleton>
                </CardHeader>
                <Skeleton className="z-0 h-full w-full  object-cover" />
              </CardBody>
              <CardFooter className="justify-between border border-zinc-200 bg-white/60 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
                <div className="w-full px-2 pb-2">
                  <Skeleton className="mb-4 h-6 w-full rounded-lg  text-sm"> </Skeleton>
                  <div className="flex justify-end">
                    <Skeleton className=" h-9 w-20 rounded-full"></Skeleton>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
      </ul>
    </section>
  );
}
