import { InferType, object, ref, string } from 'yup';

export const registerSchema = object().shape({
  certification: string().when('role', {
    is: 'DOCTOR',
    then: () => string().required(),
  }),
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), ''], 'Please make sure your passwords match'),
  email: string().email().required(),
  name: string().required(),
  password: string()
    .required('Password is required')
    .min(8, 'Please set a password with at least 8 characters for stronger security'),
  role: string().oneOf(['USER', 'DOCTOR', 'ADMIN']).required(),
  speciality: string().when('role', {
    is: 'DOCTOR',
    then: () => string().required(),
  }),
});

export type RegisterForm = InferType<typeof registerSchema>;
