'use client';
import { sitemap } from '@/lib/constants';
import { Button } from '@nextui-org/button';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const params = useSearchParams();

  return (
    <div className="mcontainer min-h-screen py-12">
      <form
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 [&_input]:block [&_label]:block [&_label]:w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          await signIn('credentials', {
            ...{
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
            },
            callbackUrl: params.get('callbackUrl') || sitemap.healthProviders.href,
          });
        }}
      >
        <h1 className="text-center text-2xl font-bold">Sign in </h1>

        <label>
          Email
          <input className="mt-1 w-full rounded-lg border p-3" name="email" required type="email" />
        </label>
        <label>
          Password
          <input className="mt-1 w-full rounded-lg border p-3" name="password" required type="password" />
        </label>

        <Button color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
