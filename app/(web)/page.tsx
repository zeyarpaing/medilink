import CoverIllustration from '@/app/(web)/CoverIllustration';
import FirstAidIcon from '@/assets/icons/FirstAidIcon';
import RealtimeIcon from '@/assets/icons/RealtimeIcon';
import ShieldIcon from '@/assets/icons/ShieldIcon';
import CTAButton from '@/components/CTAButton';
import FAQSection from '@/components/FAQSection';
import Testimonial from '@/components/Testimonial';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <section className="border-b">
        <div className="relative h-[calc(100vh-4rem)] w-full">
          <div className="absolute top-0 flex h-full w-full flex-col justify-center">
            <div className="mcontainer flex flex-col items-center justify-center sm:flex-row sm:justify-between">
              <div className="max-w-md">
                <h1 className="mb-2 text-4xl font-black text-primary md:text-6xl">Medilink</h1>
                <h2 className="text-xl md:text-2xl"> Redefining how you access healthcare</h2>
                <p className="my-4">
                  Embark on a journey to better health and well-being with Medilink. Take the first step towards
                  effortless healthcare management, seamless appointments,
                  <br /> and a healthier tomorrow.
                </p>
                {session?.user ? (
                  <CTAButton as="a" href="/providers/hospitals">
                    Start booking
                  </CTAButton>
                ) : (
                  <CTAButton as="a" href="/signup">
                    Get started
                  </CTAButton>
                )}
              </div>
              <div className="sm:pr-32">
                <CoverIllustration className="cover" height={480} width={'100%'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mcontainer my-24 [&>div>h3]:font-bold [&>div]:mb-4">
        <h2 className="mb-2 text-2xl font-black text-primary">What is Medilink?</h2>
        <p className="max-w-screen-md">
          Medilink is not just an app; it&apos;s your healthcare companion, revolutionizing the way you access and
          manage your health services. In a world where time is precious and convenience is paramount, Medilink brings
          the future of healthcare booking to your fingertips.
        </p>

        <ul className="my-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 [&>li>h3]:my-2 [&>li>h3]:text-lg [&>li>h3]:font-bold [&>li]:max-w-lg [&_li_svg]:text-primary">
          <li>
            <FirstAidIcon />
            <h3>Streamlined Healthcare Booking</h3>
            <p>
              Medilink is your gateway to hassle-free healthcare appointments. Whether you need to schedule a routine
              check-up, consult with a specialist, or manage ongoing treatments, we&apos;ve got you covered.
            </p>
          </li>
          <li>
            <RealtimeIcon />
            <h3>Real-Time Availability</h3>
            <p>
              Say goodbye to waiting on hold or visiting clinics in person to check appointment availability. Medilink
              provides real-time access to doctors&apos; schedules and services.
            </p>
          </li>
          <li>
            <ShieldIcon />
            <h3>Secure and Confidential</h3>
            <p>
              We understand the sensitivity of your health information. Medilink employs the highest standards of
              security to protect your data, ensuring it remains confidential.
            </p>
          </li>
        </ul>
      </section>
      <Testimonial />
      <FAQSection />
    </>
  );
}
