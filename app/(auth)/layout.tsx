import RegisterForm from '@/app/(auth)/register/page';
import BrandLogo from '@/assets/icons/BrandLogo';
import { sitemap } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  description: 'Authentication forms built using the components.',
  title: 'Authentication',
};

export default function AuthenticationPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
       
        <div className="bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <Image alt="Authentication" className="block" height={1000} src="/images/medical-report.png" width={1000} />
          </div>

          <Link className="relative z-20 flex items-center text-lg font-medium" href={sitemap.home.href}>
            <BrandLogo className="text-white" />
          </Link>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Medilink has saved me countless hours of work and helped me manage my hospital faster than ever
                before.&rdquo;
              </p>
              <footer className="text-sm">A hospital owner</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 overflow-y-auto sm:w-[350px]">
            {children}
            <p className="text-muted-foreground px-8 text-center text-sm">
              By clicking continue, you agree to our{' '}
              <Link className="underline underline-offset-4 hover:text-primary" href="/terms">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link className="underline underline-offset-4 hover:text-primary" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
