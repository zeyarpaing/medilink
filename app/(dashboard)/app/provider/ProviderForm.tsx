'use client';

import { mutateHealthcareProvider } from '@/app/(dashboard)/app/provider/action';
import { ProviderFormValues, providerSchema } from '@/app/(dashboard)/app/provider/schema';
import CTAButton from '@/components/CTAButton';
import Form from '@/components/form/Form';
import ImageInput from '@/components/form/ImageInput';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import Effect from '@/components/utils/Effect';
import { slugify } from '@/lib/utils';
import { Kbd } from '@nextui-org/react';
import { HealthcareProvider } from '@prisma/client';

type Props = {
  initialValues: Partial<ProviderFormValues>;
};

export default function ProviderForm({ initialValues }: Props) {
  return (
    <Form
      action={mutateHealthcareProvider}
      enableReinitialize
      initialValues={initialValues}
      listenKeyboardSave
      useFormData
      validationSchema={providerSchema}
    >
      {({ dirty, isSubmitting, isValid, setFieldValue, values }) => {
        return (
          <div>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
              <div>
                <h1 className="text-2xl font-bold ">Healthcare provider</h1>
                <p className="text-sm text-gray-500">Manage your healthcare provider</p>
              </div>
              <div>
                <CTAButton
                  className="px-4 text-base"
                  disabled={!isValid || !dirty}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  <Kbd className="bg-white/30 text-white shadow-none" keys={['command']}>
                    S
                  </Kbd>{' '}
                  Save
                </CTAButton>
              </div>
            </div>

            <section className="relative z-0 mb-6 flex flex-col gap-4">
              <ImageInput label="Image" name="image" />
              <div className="flex gap-4">
                <Input label="Name" name="name" />
                <Effect
                  callback={() => {
                    values.name && setFieldValue('slug', slugify(values.name));
                  }}
                  deps={[values.name]}
                />
                <Select
                  label="Provider type"
                  name="type"
                  options={[
                    {
                      label: 'Hospital',
                      value: 'HOSPITAL',
                    },
                    {
                      label: 'Clinic',
                      value: 'CLINIC',
                    },
                    {
                      label: 'Laboratory',
                      value: 'LABORATORY',
                    },
                  ]}
                />
                <Input label="Slug" name="slug" />
              </div>
              <Input label="A short introduction" name="description" type="textarea" />
              <Input label="Address" name="address" />
              <div className="flex gap-4">
                <Input label="Phone" name="phone" />
                <Input label="Email" name="email" />
              </div>
            </section>
          </div>
        );
      }}
    </Form>
  );
}
