import * as Yup from 'yup'

export const PaymentvalidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  cardNumber: Yup.string()
    .required('Card number is required')
    .matches(/^[0-9]{16}$/, 'Invalid card number'),
  month: Yup.string()
    .required('Month is required')
    .matches(/^(0[1-9]|1[0-2])$/, 'Invalid month'),
  year: Yup.string()
    .required('Year is required')
    .matches(/^\d{4}$/, 'Invalid year')
    .test('valid-expiry', 'Card has expired', function () {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      const expiryYear = parseInt(this.parent.year, 10)
      const expiryMonth = parseInt(this.parent.month, 10)

      if (expiryYear === currentYear) {
        return expiryMonth >= currentMonth
      }
      return expiryYear > currentYear
    }),
  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be  3-digit number')
})
