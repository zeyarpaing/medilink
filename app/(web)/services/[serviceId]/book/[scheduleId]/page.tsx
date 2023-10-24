'use client';

import { createBooking, createSchedule } from '@/app/(web)/services/[serviceId]/book/[scheduleId]/action';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import { Button } from '@nextui-org/button';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

import Payment from './Payment';

export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;
  const { data } = useSession();

  // const createBookingWithSerciceId = async function (values: any) {
  //   return createSchedule({ scheduleId, serviceId }, values).then((res) => {
  //     //   ^^ Server action
  //     toast.success('Booking success! ');
  //   });
  // };

  const router = useRouter();
  return (
    <div className="mcontainer min-h-screen py-12">
      <div className="mx-auto flex max-w-lg flex-col gap-4 py-12 ">
        <h1 className="text-center text-2xl font-bold">Book this Schedule </h1>
        <small>Schedule ID: {scheduleId}</small>
        <p>
          You will be charged <b>$5</b>(flat fees) to secure your booking. Your booking will be reserved after you
          successfully paid.{' '}
        </p>
        <Payment />
      </div>
      {/* <Form
        action={(...args) =>
          createBooking(...args)?.then((res) => {
            router.replace(`/app/booking`);
            return res;
          })
        }
       
        enableReinitialize
        initialValues={{
          scheduleId: scheduleId,
          userId: data?.user?.id,
        }}
      >
        {({ isSubmitting }) => (
          <> */}
      {/* <Input disabled label="User ID" name="userid" required />
            <Input disabled label="Username" name="username" required />
            <Input disabled label="Email" name="email" required type="email" />
            <Input label="Phone" name="phone" required type="tel" /> */}
      {/* <p className="font-semibold">Flat booking fees : 5000 (To confirm your booking)</p> */}
      {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script> */}

      {/* @ts-ignore */}
      {/* <stripe-buy-button
              buy-button-id="buy_btn_1O2BkoDNFrhDsjQpUs35pe8C"
              className="!w-full [&>iframe]:!w-screen"
              publishable-key="pk_test_51NzeiKDNFrhDsjQpIA7jelmTRIKMZbKkurcJ3RiprkuLakMo0XuRMJ5AmPSDZWr3HzBx7yNyaCBYaxHefntXuljp00pOqSTNqU"
            >
            </stripe-buy-button> */}

      {/* <Button color="primary" isLoading={isSubmitting} type="submit">
              Book now
            </Button> */}
      {/* </>
        )}
      </Form> */}
    </div>
  );
}
