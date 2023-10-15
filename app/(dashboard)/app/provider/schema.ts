import { InferType, mixed, object, string } from 'yup';

//  {
//     address: '',
//     description: '',
//     email: '',
//     image: '',
//     name: '',
//     ownerId: '',
//     phone: '',
//     slug: '',
//     type: 'HOSPITAL',}

export const providerSchema = object().shape({
  address: string().required(),
  description: string().required(),
  email: string().email().required(),
  image: mixed().required(),
  name: string().required(),
  ownerId: string().required(),
  phone: string().required(),
  slug: string().required(),
  type: string().oneOf(['HOSPITAL', 'CLINIC', 'LABORATORY']).required(),
});

export type ProviderFormValues = InferType<typeof providerSchema>;
