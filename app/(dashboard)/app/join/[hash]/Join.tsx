'use client';

import Button from '@/components/Button';
import { sitemap } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import toast from 'react-hot-toast';

type Props = {
  joinProvider: () => Promise<any>;
};

export default function Join(props: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      isLoading={isPending}
      onClick={() => {
        startTransition(() => {
          props
            .joinProvider()
            ?.then((data) => {
              toast.success(data.message);
            })
            .then(() => {
              router.replace(sitemap.app.children.schedule.href);
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      }}
    >
      Join now
    </Button>
  );
}
