'use client';

import CTAButton from '@/components/CTAButton';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { Textarea } from '@nextui-org/react';
import { Formik } from 'formik';
import React from 'react';

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="w-full max-w-3xl rounded-lg border px-10 py-8 ">
      <h2 className="mb-3 text-2xl font-bold">What can we help you with?</h2>
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2 [&_label]:font-light">
              <Input name="name" label="Full Name as Per NRIC / FIN No." />
              <Input type="tel" name="mobile" label="Mobile number" />
              <Input name="nircNo" label="Last 4 NRIC / FIN No." />
              <Input name="refNo" label="Reference number" />
              <Input name="email" label="Email address" />
              <Select
                options={[
                  {
                    label: 'Product enquiry',
                    value: 'Product enquiry',
                  },
                ]}
                name="subject"
                label="Subject"
              />
            </div>
            <Input name="message" type="textarea" label="Message" className="mt-4" />
            <CTAButton className="mt-4 !w-full shadow-none" type="submit">
              Submit
            </CTAButton>
          </form>
        )}
      </Formik>
    </div>
  );
}
