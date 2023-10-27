'use client';

import Payment from './Payment';

export default function Page({ params }: { params: { scheduleId: string; serviceId: string } }) {
  const scheduleId = params.scheduleId;

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
    </div>
  );
}
