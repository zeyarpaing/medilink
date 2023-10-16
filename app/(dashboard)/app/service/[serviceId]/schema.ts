import { InferType, mixed, number, object, string } from 'yup';

export const serviceSchema = object().shape({
  bookingPrice: number().min(0).required(),
  description: string().required(),
  healthcareProviderId: number(),
  image: mixed().required(),
  minDuration: number().integer().min(1).required(),
  name: string().required(),
});

export type ServiceFormValues = InferType<typeof serviceSchema>;
