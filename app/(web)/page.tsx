import CoverIllustration from '@/app/(web)/CoverIllustration';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section>
        <div className="relative h-[calc(100vh-4rem)] w-full">
          {/* <Image
            src="https://img.freepik.com/free-photo/covid-19-healthcare-workers-online-medicine-concept-successful-cheerful-asian-female-doctor-nurse-scrubs-fist-pump-rejoice-showing-smartphone-screen-app-looking-pleased-camera_1258-86895.jpg?w=1380&t=st=1695551232~exp=1695551832~hmac=220b97fb3eb1589f9f984f397f27ae850e6dd9b8059c3870f4014e9f9900d459"
            className="h-full w-full -scale-x-100 object-cover"
            alt="hero image"
            height={2000}
            width={3556}
          /> */}
          <div className="absolute top-0 flex h-full w-full flex-col justify-center bg-gradient-to-tr from-white/80 to-transparent">
            <div className="mcontainer flex flex-col items-center justify-center text-red-400 sm:flex-row sm:justify-between">
              <div>
                <h1 className="text-4xl font-black">Medilink</h1>
                <h2>Best healthcare booking software</h2>
              </div>
              <div className="sm:pr-32">
                <CoverIllustration className="cover" width={'100%'} height={480} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
