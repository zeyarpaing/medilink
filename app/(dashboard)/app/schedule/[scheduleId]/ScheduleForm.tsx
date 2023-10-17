'use client';
import { mutateSchedule } from '@/app/(dashboard)/app/schedule/[scheduleId]/action';
import { scheduleSchema } from '@/app/(dashboard)/app/schedule/[scheduleId]/schema';
import CTAButton from '@/components/CTAButton';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import { Kbd } from '@nextui-org/react';
import { Schedule, Service } from '@prisma/client';
import { useRouter } from 'next/navigation';

export default function ScheduleForm({
  initialValues,
  services,
}: {
  initialValues: Partial<Schedule>;
  services: Service[];
}) {
  const isEdit = initialValues.id !== undefined;

  const router = useRouter();
  return (
    <Form
      action={(...args) =>
        mutateSchedule(...args)?.then((res) => {
          router.back();
          return res;
        })
      }
      enableReinitialize
      initialValues={initialValues}
      listenKeyboardSave
      // useFormData
      validationSchema={scheduleSchema}
    >
      {({ dirty, isSubmitting, isValid, setFieldValue, values }) => {
        return (
          <div>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
              <div>
                <button
                  onClick={() => {
                    router.back();
                  }}
                  tabIndex={0}
                  type="button"
                >
                  <h1 className="text-2xl font-bold ">
                    {`<`} {isEdit ? 'Edit schedule' : 'Create schedule'}
                  </h1>
                </button>
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
              <div className="flex gap-4">
                {/* <div className="w-full">
                  <Datepicker label="Date" name="date" />
                </div> */}
                <Input label="Start date and time" name="dateTime" type="datetime-local" />
              </div>
              <div className="flex gap-4">
                <Select
                  label="Service"
                  name="serviceId"
                  options={services.map((service) => ({
                    label: service.name,
                    /*
                    (
                      <div className="flex items-center gap-2 font-bold">
                        <Image
                          alt="service"
                          className="h-9 w-9 rounded-md object-cover"
                          height={100}
                          src={service.image}
                          width={100}
                        />
                        {service.name}
                      </div>
                    )
                    */
                    value: '' + service.id,
                  }))}
                />
                <Input label="Max booking" name="maxBooking" type="number" />
              </div>
            </section>
          </div>
        );
      }}
    </Form>
  );
}
