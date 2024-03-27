import * as yup from 'yup';

export const LoginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email('Invalid email').
    required('Email is required'),
    password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(25, 'Password must be at most 25 characters')
    .required('Password is required!!!!')
});