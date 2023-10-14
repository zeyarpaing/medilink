import { InferType, object, ref, string } from 'yup';

export const registerSchema = object().shape({
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), ''], 'Please make sure your passwords match'),
  email: string().email().required(),
  name: string().required(),
  password: string()
    .required('Password is required')
    .min(8, 'Please set a password with at least 8 characters for stronger security'),
  phone: string().required(),
  role: string().required(),
});

export type RegisterForm = InferType<typeof registerSchema>;
