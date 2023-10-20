'use client';

import { Listener } from '@/components/utils/Listener';
import { Formik, FormikConfig, Form as FormikForm, FormikHelpers, FormikProps, FormikValues } from 'formik';
import toast from 'react-hot-toast';

type Props<T extends FormikValues> = Omit<FormikConfig<T>, 'onSubmit'> & {
  action?: (values: any) => Promise<any> | void;
  beforeSubmit?: (values: T) => T;
  children: ((props: FormikProps<T>) => React.ReactNode) | React.ReactNode;
  className?: string;
  id?: string;
  listenKeyboardSave?: boolean;
  onSubmit?: (values: T, helpers: FormikHelpers<T>) => Promise<any> | void;
  useFormData?: boolean;
};

export default function Form<T extends FormikValues>({
  action,
  beforeSubmit,
  children,
  className,
  id,
  listenKeyboardSave,
  onSubmit,
  useFormData,
  ...rest
}: Props<T>) {
  return (
    <Formik
      onSubmit={async (values, helpers) => {
        if (typeof beforeSubmit === 'function') {
          values = beforeSubmit(values);
        }
        if (useFormData) {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });
          values = formData as unknown as T;
        }
        return action
          ? action(values)
              ?.then((res) => {
                if (res?.message) toast.success(res.message);
              })
              .catch((e) => {
                if (e?.message) toast.error(e.message);
              })
          : onSubmit?.(values, helpers);
      }}
      {...rest}
    >
      {(props) => (
        <FormikForm className={className} id={id} onSubmit={props.handleSubmit}>
          {children instanceof Function ? children(props) : children}
          {listenKeyboardSave ? (
            <Listener
              onTrigger={() => {
                if (props.dirty) props.isValid ? props.submitForm() : toast.error('Invalid form');
              }}
            />
          ) : null}
        </FormikForm>
      )}
    </Formik>
  );
}
