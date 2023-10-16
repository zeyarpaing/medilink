import { InferType, mixed, number, object, string } from 'yup';

export const serviceSchema = object().shape({
  description: string().required(),
  healthcareProviderId: number(),
  image: mixed().required(),
  name: string().required(),
});

export type ServiceFormValues = InferType<typeof serviceSchema>;
