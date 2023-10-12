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
      <h2 className="mb-5 text-2xl font-bold">What can we help you with?</h2>
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2 [&_label]:font-light">
              <Input label="Full name" name="name" />
              <Input label="Mobile number" name="mobile" type="tel" />
              <Input label="Email address" name="email" />
              <Select
                label="Subject"
                name="subject"
                options={[
                  {
                    label: 'Product enquiry',
                    value: 'Product enquiry',
                  },
                ]}
              />
            </div>
            <Input className="mt-4" label="Message" name="message" type="textarea" />
            <CTAButton className="mt-4 !w-full shadow-none" type="submit">
              Submit
            </CTAButton>
          </form>
        )}
      </Formik>
    </div>
  );
}
