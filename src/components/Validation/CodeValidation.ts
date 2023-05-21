import * as Yup from 'yup'

export const CodevalidationSchema = Yup.object().shape({
  code1: Yup.string().required('Verification code is required'),
  code2: Yup.string().required('Verification code is required'),
  code3: Yup.string().required('Verification code is required'),
  code4: Yup.string().required('Verification code is required'),
  code5: Yup.string().required('Verification code is required'),
  code6: Yup.string().required('Verification code is required')
})
