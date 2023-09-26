import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="border-b">
        <div className="relative h-[calc(100vh-4rem)] w-full">
          <Image
            src="https://img.freepik.com/free-photo/covid-19-healthcare-workers-online-medicine-concept-successful-cheerful-asian-female-doctor-nurse-scrubs-fist-pump-rejoice-showing-smartphone-screen-app-looking-pleased-camera_1258-86895.jpg?w=1380&t=st=1695551232~exp=1695551832~hmac=220b97fb3eb1589f9f984f397f27ae850e6dd9b8059c3870f4014e9f9900d459"
            className="h-full w-full -scale-x-100 object-cover"
            alt="hero image"
            height={2000}
            width={3556}
          />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center  bg-gradient-to-tr from-white/80 to-transparent">
            <div className="mcontainer flex flex-col items-center justify-center text-primary sm:flex-row sm:justify-between">
              <div className="max-w-md">
                <h1 className="mb-2 text-4xl font-black md:text-6xl">Medilink</h1>
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
              <div className="sm:pr-32"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mcontainer my-12 [&>div>h3]:font-bold [&>div]:mb-4">
        <div>
          <h2 className="mb-2 text-2xl font-black">What is Medilink?</h2>
          <p>
            Medilink is not just an app; it's your healthcare companion, revolutionizing the way you access and manage
            your health services. In a world where time is precious and convenience is paramount, Medilink brings the
            future of healthcare booking to your fingertips.
          </p>
        </div>
        <ul className="flex flex-col justify-around gap-6 [&>li>h3]:text-lg [&>li>h3]:font-bold [&>li]:max-w-lg">
          <li>
            <h3>Streamlined Healthcare Booking</h3>
            <p>
              Medilink is your gateway to hassle-free healthcare appointments. Whether you need to schedule a routine
              check-up, consult with a specialist, or manage ongoing treatments, we've got you covered.
            </p>
          </li>
          <li>
            <h3>Real-Time Availability</h3>
            <p>
              Say goodbye to waiting on hold or visiting clinics in person to check appointment availability. Medilink
              provides real-time access to doctors' schedules and services. See available time slots, choose what suits
              you best, and book your appointment instantly, all from the comfort of your device.
            </p>
          </li>
          <li>
            <h3>Secure and Confidential</h3>
            <p>
              We understand the sensitivity of your health information. Medilink employs the highest standards of
              security to protect your data, ensuring it remains confidential and accessible only to you and your chosen
              healthcare providers.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
