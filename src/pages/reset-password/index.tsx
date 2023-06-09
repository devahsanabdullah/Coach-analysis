import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
import { useState, useEffect } from 'react'
// import { Registationvalidation } from '@/components/Validation/RegistationValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import LoaderIcon from '@/components/icon/LoaderIcon'
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
})
const ResetPassword = () => {
  const [token, setToken] = useState<string>('')
  const [verify, setVerify] = useState(false)
  const Router = useRouter()
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 placeholder:font-headingBook text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    password: '',
    password_confirmation: ''
  }
  useEffect(() => {
    const storedToken: any = localStorage.getItem('userData')
    let obj = JSON.parse(storedToken)
    setToken(obj.token)
  }, [])
  return (
    <div className="flex w-full">
      <HeroComponent name="Forgot Password" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar route="/" />
        <div className="my-5 text-center">
          <h1 className="text-4xl font-headingBold">Reset Password</h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (values) {
              setVerify(true)
              axios
                .post(
                  'https://veo.api.almerajgroups.com/api/coaches/password/reset',
                  {
                    token,
                    password: values.password,
                    password_confirmation: values.password_confirmation
                  }
                )
                .then((response: any) => {
                  console.log(response)
                  toast.success('success Reset password')
                  setVerify(false)
                  Router.push('/signin')
                })
                .catch((error) => {
                  console.log(error)
                  setVerify(false)
                })
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="">
                <Field
                  type="password"
                  id="newPassword"
                  name="password"
                  placeholder="New Password"
                  className={styleed}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>

              <div className="">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  className={styleed}
                />
                <ErrorMessage
                  name="password_confirmation"
                  component="div"
                  className="error text-red-500 text-sm font-headingBook"
                />
              </div>

              <Button
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)'
                }}
                type="submit"
              >
                {verify ? <LoaderIcon /> : <>Reset</>}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default ResetPassword
