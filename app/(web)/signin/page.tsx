'use client';
import { Button } from '@nextui-org/button';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SignIn() {
  const { status } = useSession();
  const router = useRouter();

  const params = useSearchParams();
  // console.log();
  useEffect(() => {
    if (status !== 'loading' && status === 'authenticated') {
      router.replace('/providers/hospital');
    }
  }, [status]);

  return (
    <div className="mcontainer min-h-screen py-12">
      <form
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          let res = await signIn('credentials', {
            ...{
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
            },
            callbackUrl: params.get('callbackUrl') || '/providers/hospital',
          });
        }}
      >
        <h1 className="text-center text-2xl font-bold">Sign in </h1>

        <label>
          Email
          <input className="mt-1 w-full rounded-lg border p-3" name="email" type="email" required />
        </label>
        <label>
          Password
          <input className="mt-1 w-full rounded-lg border p-3" name="password" type="password" required />
        </label>

        <Button color="primary" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
}
