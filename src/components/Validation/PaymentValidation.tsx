import * as Yup from 'yup'

export const PaymentvalidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  cardNumber: Yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  month: Yup.string().required('Expiry month is required'),
  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be 3 digits')
})
