import { Skeleton } from '@nextui-org/skeleton';

export default function FormSkeleton() {
  return (
    <div>
      <div className="mb-8 flex justify-between">
        <Skeleton className="h-14 w-48 rounded-lg" />
        <Skeleton className="h-14 w-28 rounded-lg" />
      </div>
      <Skeleton className="mb-6 h-24 w-full rounded-xl" />
      <Skeleton className="mb-6 h-24 w-full rounded-xl" />
      <Skeleton className="h-24 w-full rounded-xl" />
    </div>
  );
}
