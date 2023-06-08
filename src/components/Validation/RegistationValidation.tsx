import * as Yup from 'yup'

export const Registationvalidation = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  club_name: Yup.string().required('Club name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().min(8).required('Password is required'),
  password_confirmation: Yup.string()
    .min(8)
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
})
