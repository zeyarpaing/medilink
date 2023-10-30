'use client';

import { mutateProfile } from '@/app/(dashboard)/app/profile/action';
import { profileFormSchema } from '@/app/(dashboard)/app/profile/schema';
import CTAButton from '@/components/CTAButton';
import Form from '@/components/form/Form';
import ImageInput from '@/components/form/ImageInput';
import Input from '@/components/form/Input';
import { Kbd } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';

export default function ProfileForm() {
  const { data } = useSession();
  return (
    <Form
      action={(...args) =>
        mutateProfile(...args).then(async (res) => {
          await signIn('direct_jwt_auth', {
            redirect: true,
            callbackUrl: typeof window !== 'undefined' ? window.location.href : undefined,
            ...res.data,
          });
          return res;
        })
      }
      enableReinitialize
      // @ts-expect-error initialValues
      initialValues={data?.user}
      listenKeyboardSave
      useFormData
      validationSchema={profileFormSchema}
    >
      {({ dirty, isSubmitting, isValid, setFieldValue, values }) => {
        return (
          <div className="mx-auto max-w-md">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background pb-4">
              <div>
                <h1 className="text-2xl font-bold ">Profile</h1>
                <p className="text-sm text-gray-500">Update your profile</p>
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
              <Input label="Name" name="name" />
              <Input label="Email" name="email" />
              <Input label="Phone" name="phone" />
            </section>
          </div>
        );
      }}
    </Form>
  );
}
