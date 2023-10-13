'use client';

import { createSchedule } from '@/app/(web)/services/[serviceId]/book/[scheduleId]/action';
import Input from '@/components/Input';
import Form from '@/components/form/Form';
import { Button } from '@nextui-org/button';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;
  const serviceId = params.serviceId;

  const { data } = useSession();

  const createBookingWithSerciceId = async function (values: any) {
    return createSchedule({ scheduleId, serviceId }, values).then((res) => {
      //   ^^ Server action
      toast.success('Booking success! ');
    });
  };

  return (
    <div className="mcontainer min-h-screen py-12">
      <Form
        action={createBookingWithSerciceId}
        className="mx-auto flex max-w-lg flex-col gap-4 py-12 "
        enableReinitialize
        initialValues={{
          email: data?.user?.email,
          phone: '',
          userid: data?.user?.id,
          username: data?.user?.name,
        }}
      >
        {({ isSubmitting }) => (
          <>
            <h1 className="text-center text-2xl font-bold">Book this Schedule </h1>
            <small>Schedule ID: {scheduleId}</small>
            <Input disabled label="User ID" name="userid" required />
            <Input disabled label="Username" name="username" required />
            <Input disabled label="Email" name="email" required type="email" />
            <Input label="Phone" name="phone" required type="tel" />
            <Button color="primary" isLoading={isSubmitting} type="submit">
              Book now
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}
