import CoverIllustration from '@/app/(web)/CoverIllustration';
import Testimonial from '@/components/Testimonial';
import FAQSection from '@/components/FAQSection';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="border-b">
        <div className="relative h-[calc(100vh-4rem)] w-full">
          {/* <Image
            src="https://img.freepik.com/free-photo/covid-19-healthcare-workers-online-medicine-concept-successful-cheerful-asian-female-doctor-nurse-scrubs-fist-pump-rejoice-showing-smartphone-screen-app-looking-pleased-camera_1258-86895.jpg?w=1380&t=st=1695551232~exp=1695551832~hmac=220b97fb3eb1589f9f984f397f27ae850e6dd9b8059c3870f4014e9f9900d459"
            className="h-full w-full -scale-x-100 object-cover"
            alt="hero image"
            height={2000}
            width={3556}
             bg-gradient-to-tr from-white/80 to-transparent
          /> */}
          <div className="absolute top-0 flex h-full w-full flex-col justify-center">
            <div className="mcontainer flex flex-col items-center justify-center sm:flex-row sm:justify-between">
              <div className="max-w-md">
                <h1 className="mb-2 text-4xl font-black text-primary md:text-6xl">Medilink</h1>
                <h2 className="text-xl md:text-2xl"> Redefining how you access healthcare</h2>
                <p className="mt-4">
                  Embark on a journey to better health and well-being with Medilink. Take the first step towards
                  effortless healthcare management, seamless appointments,
                  <br /> and a healthier tomorrow.
                </p>
                <Button className="mt-4 w-full sm:w-fit" color="primary" size="lg">
                  Get started
                </Button>
              </div>
              <div className="sm:pr-32">
                <CoverIllustration className="cover" width={'100%'} height={480} />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
              <g fill="none">
                <rect
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeWidth="4"
                  height="26"
                  width="38"
                  rx="3"
                  y="16"
                  x="5"
                />
                <path
                  d="M19 8h10V4H19v4Zm11 1v7h4V9h-4Zm-12 7V9h-4v7h4Zm11-8a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4ZM19 4a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1V4Z"
                  fill="currentColor"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M18 29h12m-6-6v12"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </g>
            </svg>
            <h3>Streamlined Healthcare Booking</h3>
            <p>
              Medilink is your gateway to hassle-free healthcare appointments. Whether you need to schedule a routine
              check-up, consult with a specialist, or manage ongoing treatments, we&apos;ve got you covered.
            </p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
              <g stroke="currentColor" strokeWidth="4" fill="none">
                <path d="M4 5h40M4 43h40M8 36v7" strokeLinecap="round" />
                <path d="M12 28H4v8h8v-8Zm16-8h-8v8h8v-8Zm16-8h-8v8h8v-8Z" stroke-linejoin="round" />
                <path d="M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15" strokeLinecap="round" />
              </g>
            </svg>

            <h3>Real-Time Availability</h3>
            <p>
              Say goodbye to waiting on hold or visiting clinics in person to check appointment availability. Medilink
              provides real-time access to doctors&apos; schedules and services.
            </p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
              <g stroke-linejoin="round" stroke="currentColor" stroke-width="4" fill="none">
                <path d="M6 9.256L24.009 4L42 9.256v10.778C42 31.362 34.75 40.419 24.003 44C13.253 40.42 6 31.36 6 20.029V9.256Z" />
                <circle strokeLinecap="round" cy="18" cx="24" r="5" />
                <path d="M32 31a8 8 0 1 0-16 0" strokeLinecap="round" />
              </g>
            </svg>

            <h3>Secure and Confidential</h3>
            <p>
              We understand the sensitivity of your health information. Medilink employs the highest standards of
              security to protect your data, ensuring it remains confidential.
            </p>
          </li>
        </ul>
      </section>
      {/* <section className="mt-12 bg-primary/30 py-12">
        <div className="mcontainer flex flex-wrap items-center justify-evenly gap-x-4 gap-y-8 ">
          {[
            {
              description: 'patients treated',
              count: '2k',
            },
            {
              description: 'hospitals',
              count: '50',
            },
            {
              description: 'clinics',
              count: '75',
            },
            {
              description: 'doctors',
              count: '400+',
            },
            {
              description: 'hours saved',
              count: '2k+',
            },
          ].map((stat, idx) => (
            <div className="w-full max-w-[8rem] text-center" key={idx}>
              <p className="text-2xl font-bold">{stat.count}</p>
              <p className="text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </section> */}
      <Testimonial />
      <FAQSection />
    </>
  );
}
