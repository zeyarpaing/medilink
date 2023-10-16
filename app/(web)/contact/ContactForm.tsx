'use client';

import CTAButton from '@/components/CTAButton';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import { Formik } from 'formik';
import { useSession } from 'next-auth/react';

export default function ContactForm() {
  const { data } = useSession();
  return (
    <div className="w-full max-w-3xl rounded-lg  border-2 px-10 py-8 dark:border-foreground/30 ">
      <h2 className="mb-5 text-2xl font-bold">What can we help you with?</h2>
      <Form
        enableReinitialize
        initialValues={{
          email: data?.user?.email,
          name: data?.user?.name,
        }}
        onSubmit={(values) => {}}
      >
        {({ handleSubmit }) => (
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2 [&_label]:font-light">
              <Input label="Full name" name="name" />
              <Input label="Mobile number" name="mobile" type="tel" />
              <Input label="Email address" name="email" />
              <Select
                label="Subject"
                name="subject"
                options={[
                  {
                    label: 'Enquiry',
                    value: 'Enquiry',
                  },
                  {
                    label: 'Feedback',
                    value: 'Feedback',
                  },
                  {
                    label: 'Others',
                    value: 'Others',
                  },
                ]}
              />
            </div>
            <Input className="mt-4" label="Message" name="message" type="textarea" />
            <CTAButton className="mt-4 !w-full shadow-none" type="submit">
              Submit
            </CTAButton>
          </div>
        )}
      </Form>
    </div>
  );
}
