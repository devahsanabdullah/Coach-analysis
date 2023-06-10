import HeroComponent from '@/components/HeroComponet/HeroComponent'
// import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
// import LineIcon from '@/components/icon/LineIcon'
// import TwitterIcon from '@/components/icon/TwitterIcon'
// import FacebookIcon from '@/components/icon/FacebookIcon'
// import GoogleIcon from '@/components/icon/GoogleIcon'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
// import { Registationvalidation } from '@/components/Validation/RegistationValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useRouter } from 'next/router'
import LoaderIcon from '@/components/icon/LoaderIcon'
import * as Yup from 'yup'
const SignIn = () => {
  const Router = useRouter()
  const [verify, setVerify] = useState(false)
  const styleed =
    'bg-[#ebf0f5] border-none placeholder:font-headingBook h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().max(8).required('Password is required')
  })
  return (
    <div className="flex w-full">
      <HeroComponent name="Sign In !" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <div className="mt-10 w-full flex justify-between items-center font-headingBook text-[#2c5c92]">
          <div>{/* <BackIcon /> */}</div>
          <div className="flex">
            <h1>Home</h1>
            <div className=" border-r  h-5 mx-2 mt-1  border-black "></div>
            <h1>How its work</h1>
          </div>
          <div></div>
        </div>
        <div className="my-5 text-center">
          <h1 className="text-4xl font-headingBold">Welcome Back!</h1>
          <h1 className="text-xl font-headingBook my-2">
            To stay connected with us please login with your personal info
          </h1>
        </div>
        {/* <div>
          <LineIcon />
          <div className="flex  justify-between mt-5">
            <FacebookIcon />
            <TwitterIcon />
            <GoogleIcon />
          </div>
        </div> */}
        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (values) {
              setVerify(true)

              axios
                .post(
                  'https://veo.api.almerajgroups.com/api/coaches/login',
                  values
                )
                .then((response: any) => {
                  console.log(response)
                  Router.push('/dashboard')

                  toast.success('success Login')
                  // Router.push('/checkout')
                })
                .catch((error: any) => {
                  toast.error(error.response.data.message)

                  setVerify(false)
                })
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="">
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={styleed}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>

              <div className="">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={styleed}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>

              <div
                className="flex items-end justify-end pt-1"
                onClick={() => Router.push('/forgot-password')}
              >
                <h1
                  className="font-headingBook cursor-pointer"
                  onClick={() => Router.push('/forgot-password')}
                >
                  Forgot Password ?
                </h1>
              </div>
              <Button
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)'
                }}
                type="submit"
              >
                {verify ? <LoaderIcon /> : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default SignIn
