'use client';

import { registerAccount } from '@/app/(auth)/register/action';
import { registerSchema } from '@/app/(auth)/register/schema';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/form/Form';
import { sitemap } from '@/lib/constants';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <>
      <Link className={'absolute right-4 top-4 md:right-8 md:top-8'} href={sitemap.login.href}>
        Already have an account? <b className=" text-primary">Login </b>
      </Link>
      <div className="mb-2 flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-muted-foreground text-sm">Enter your information below to register </p>
      </div>
      <Form
        action={registerAccount}
        className="flex w-full flex-col gap-4"
        enableReinitialize
        initialValues={{
          confirmPassword: '',
          email: '',
          name: '',
          password: '',
          phone: '',
          role: 'user',
        }}
        validateOnChange
        validationSchema={registerSchema}
      >
        {({ isSubmitting, isValid }) => (
          <>
            <Input label="Full name" name="name" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="password" />
            <Input label="Confirm password" name="confirmPassword" type="password" />
            <Input label="Phone" name="phone" type="tel" />
            <Button color="primary" disabled={!isValid} isLoading={isSubmitting} type="submit">
              Register
            </Button>
          </>
        )}
      </Form>
    </>
  );
}
