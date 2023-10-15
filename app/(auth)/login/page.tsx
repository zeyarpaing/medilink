'use client';

import Button from '@/components/Button';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import { sitemap } from '@/lib/constants';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { object, string } from 'yup';

const validationSchema = object().shape({
  email: string().email('Please enter a correct email').required('Email is required'),
  password: string().required('Password is required'),
});

export default function RegisterForm() {
  const params = useSearchParams();

  useEffect(() => {
    if (params.get('error') === 'CredentialsSignin') {
      console.log('Tost invoke');
      requestAnimationFrame(() => {
        toast.error('Incorrect credentials. Please enter the correct credentials.');
      });
    }
  }, []);

  return (
    <>
      <div className="absolute left-0 top-4 flex w-full justify-center px-6 md:justify-end">
        <Link href={sitemap.register.href}>
          New to Medilink? <b className=" text-primary">Register</b>
        </Link>
      </div>
      <div className="mb-2 flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Login to your account</h1>
        <p className="text-muted-foreground text-sm">Enter your credentials to login </p>
      </div>
      <Form
        action={(values) => {
          return signIn('credentials', {
            ...values,
            callbackUrl: params.get('callbackUrl') || sitemap.healthProviders.href,
          });
        }}
        className="flex w-full flex-col gap-4"
        enableReinitialize
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnChange
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, values }) => {
          return (
            <>
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
              <Button color="primary" disabled={!isValid} isLoading={isSubmitting} type="submit">
                Login
              </Button>
            </>
          );
        }}
      </Form>
    </>
  );
}
