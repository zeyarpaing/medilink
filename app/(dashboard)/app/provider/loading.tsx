import { Skeleton } from '@nextui-org/skeleton';

export default function FormSkeleton() {
  return (
    <div>
      <div className="mb-6 flex justify-between">
        <Skeleton className="h-14 w-48 rounded-lg" />
        <Skeleton className="h-14 w-28 rounded-lg" />
      </div>

      <Skeleton className="mb-6 h-32 w-full rounded-xl" />
      <div className="mb-6 flex gap-4">
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      <div className="mb-6 flex gap-4">
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
}
