import { InferType, mixed, object, string } from 'yup';

export const profileFormSchema = object().shape({
  email: string().email().required(),
  id: string().required(),
  image: mixed().nullable(),
  name: string().required(),
  phone: string().nullable(),
});

export type ProfileForm = InferType<typeof profileFormSchema>;
