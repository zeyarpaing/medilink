import { Skeleton } from '@nextui-org/skeleton';

export default async function Page() {
  return (
    <div className="mcontainer min-h-screen py-12">
      <div>
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
      <h2 className="mb-4 mt-6 text-2xl font-bold">Services Offered</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="mb-4 h-24 w-full rounded-lg  text-sm"> </Skeleton>
        <Skeleton className="mb-4 h-24 w-full rounded-lg  text-sm"> </Skeleton>
        <Skeleton className="mb-4 h-24 w-full rounded-lg  text-sm"> </Skeleton>
      </ul>
    </div>
  );
}
