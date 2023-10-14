'use client';

import { registerAccount } from '@/app/(auth)/register/action';
import { registerSchema } from '@/app/(auth)/register/schema';
import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioGroup from '@/components/RadioGroup';
import Form from '@/components/form/Form';
import { sitemap } from '@/lib/constants';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function RegisterForm() {
  return (
    <>
      <div className="absolute left-0 top-4 flex w-full justify-center px-6 md:justify-end">
        <Link href={sitemap.login.href}>
          Already have an account? <b className=" text-primary">Login </b>
        </Link>
      </div>
      <div className="mb-2 flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-muted-foreground text-sm">Enter your information below to register </p>
      </div>
      <Form
        action={async (values) =>
          registerAccount(values).then(async (res) => {
            await signIn('credentials', {
              ...{
                email: values.email,
                password: values.password,
              },
              callbackUrl: sitemap.healthProviders.href,
            });
            return res;
          })
        }
        className="flex w-full flex-col gap-4"
        enableReinitialize
        initialValues={{
          confirmPassword: '',
          email: '',
          name: '',
          password: '',
          role: '',
        }}
        validateOnChange
        validationSchema={registerSchema}
      >
        {({ isSubmitting, isValid, values }) => {
          return (
            <>
              <RadioGroup
                label="You are a "
                name="role"
                options={[
                  {
                    label: 'Customer/Patient',
                    value: 'USER',
                  },
                  {
                    label: 'Doctor',
                    value: 'DOCTOR',
                  },
                  {
                    label: 'Admin at a healthcare provider',
                    value: 'ADMIN',
                  },
                ]}
              />
              <Input label="Full name" name="name" />
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
              <Input label="Confirm password" name="confirmPassword" type="password" />
              <Button color="primary" disabled={!isValid} isLoading={isSubmitting} type="submit">
                Register
              </Button>
            </>
          );
        }}
      </Form>
    </>
  );
}
