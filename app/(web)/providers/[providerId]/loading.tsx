import { Skeleton } from '@nextui-org/skeleton';

export default async function Page() {
  return (
    <div className="mcontainer flex min-h-screen gap-10 py-12">
      <div className="flex-1">
        <Skeleton className="h-[32rem] w-full rounded-xl">
          <div className="h-full w-full rounded-xl bg-gray-500 object-cover" />
        </Skeleton>
        <div className="my-8">
          <Skeleton className="mb-2 h-12 w-48 rounded-lg"> </Skeleton>
          <Skeleton className="mb-2 mt-3 h-5 w-32 rounded-lg "> </Skeleton>
          <Skeleton className="mb-2 mt-3 h-5 w-32 rounded-lg "> </Skeleton>
          <Skeleton className="mb-2 mt-3 h-5 w-32 rounded-lg "> </Skeleton>
          <Skeleton className="mb-2 mt-3 h-5 w-32 rounded-lg "> </Skeleton>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="mb-4 mt-6 text-2xl font-bold">Services Offered</h2>
        <ul className="flex flex-col gap-4">
          <Skeleton className="h-24 w-full rounded-lg  text-sm"> </Skeleton>
          <Skeleton className="h-24 w-full rounded-lg  text-sm"> </Skeleton>
          <Skeleton className="h-24 w-full rounded-lg  text-sm"> </Skeleton>
        </ul>
      </div>
    </div>
  );
}
