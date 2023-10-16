'use client';
import { mutateService } from '@/app/(dashboard)/app/service/[serviceId]/action';
import { serviceSchema } from '@/app/(dashboard)/app/service/[serviceId]/schema';
import CTAButton from '@/components/CTAButton';
import Form from '@/components/form/Form';
import ImageInput from '@/components/form/ImageInput';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import { Kbd } from '@nextui-org/react';
import { Service } from '@prisma/client';
import { useRouter } from 'next/navigation';

export default function ServiceForm({ initialValues }: { initialValues: Partial<Service> }) {
  const isEdit = initialValues.id !== undefined;

  const router = useRouter();
  return (
    <Form
      action={(...args) =>
        mutateService(...args)?.then((res) => {
          router.back();
          return res;
        })
      }
      enableReinitialize
      initialValues={initialValues}
      listenKeyboardSave
      useFormData
      validationSchema={serviceSchema}
    >
      {({ dirty, isSubmitting, isValid, setFieldValue, values }) => {
        return (
          <div>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
              <div>
                <h1 className="text-2xl font-bold ">{isEdit ? 'Edit service' : 'Create service'}</h1>
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
                <Input label="Booking price " name="bookingPrice" type="number" />
              </div>
              <div className="flex gap-4">
                <Input label="Minimum duration (minutes)" name="minDuration" type="number" />
                <Input label="A short introduction" name="description" type="textarea" />
              </div>
            </section>
          </div>
        );
      }}
    </Form>
  );
}
