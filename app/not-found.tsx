import NotFoundIllustration from '@/assets/icons/NotFoundIllustration';
import CTAButton from '@/components/CTAButton';

export default async function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <NotFoundIllustration />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sorry, it&apos;s 404</h1>

        <p className="my-4 text-gray-500">We can&apos;t find that page.</p>
        <CTAButton href="/" isLink>
          Go to home
        </CTAButton>
      </div>
    </div>
  );
}
