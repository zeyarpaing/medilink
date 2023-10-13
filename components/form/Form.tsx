'use client';

import { Formik, FormikConfig, Form as FormikForm, FormikHelpers, FormikProps, FormikValues } from 'formik';

type Props<T extends FormikValues> = Omit<FormikConfig<T>, 'onSubmit'> & {
  action?: (values: T) => Promise<any> | void;
  beforeSubmit?: (values: T) => T;
  children: ((props: FormikProps<T>) => React.ReactNode) | React.ReactNode;
  className?: string;
  id?: string;
  onSubmit?: (values: T, helpers: FormikHelpers<T>) => Promise<any> | void;
};

export default function Form<T extends FormikValues>({
  action,
  beforeSubmit,
  children,
  className,
  id,
  onSubmit,
  ...rest
}: Props<T>) {
  return (
    <Formik
      onSubmit={async (values, helpers) => {
        // helpers.setSubmitting(true);
        if (typeof beforeSubmit === 'function') {
          values = beforeSubmit(values);
        }
        return action ? action(values) : onSubmit?.(values, helpers);
      }}
      {...rest}
    >
      {(props) => (
        <FormikForm className={className} id={id} onSubmit={props.handleSubmit}>
          {children instanceof Function ? children(props) : children}
        </FormikForm>
      )}
    </Formik>
  );
}
