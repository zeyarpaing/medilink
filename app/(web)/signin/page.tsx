'use client';
import { Button } from '@nextui-org/button';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';

export default function SignIn() {
  //   const csrfToken = await getCsrfToken();
  const { data, status } = useSession();

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
            // callbackUrl: '/signin',
          });
          console.log('res ', res);
        }}
      >
        <h1 className="text-center text-2xl font-bold">Sign in </h1>
        {/* <label>
          Username:
          <input className="w-full rounded-lg border p-3" name="username" type="text" required />
        </label> */}
        <label>
          Email:
          <input className="w-full rounded-lg border p-3" name="email" type="email" required />
        </label>
        {/* <label>
    Phone:
    <input className="w-full rounded-lg border p-3" name="phone" type="tel" required />
  </label> */}
        <label>
          Password:
          <input className="w-full rounded-lg border p-3" name="password" type="password" required />
        </label>

        <Button color="primary" type="submit">
          Sign in
        </Button>

        {JSON.stringify(data?.user)}
        {status}
      </form>
    </div>
  );
}
