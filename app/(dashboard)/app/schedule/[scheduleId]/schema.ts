import { InferType, date, number, object, string } from 'yup';

export const scheduleSchema = object().shape({
  bookingPrice: number().min(1, 'Minumum: 1').required('Booking price is required'),
  dateTime: date().required('Date and time is required'),
  doctorId: string().required('Doctor is required'),
  duration: number().min(1).required('Duration is required'),
  id: string(),
  maxBooking: number().min(1).required('Max booking is required'),
  providerId: number().required('Provider is required'),
  serviceId: number().required('Service is required'),
});

export type ScheduleFormValues = InferType<typeof scheduleSchema>;
