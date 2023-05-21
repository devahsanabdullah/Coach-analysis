import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
import LineIcon from '@/components/icon/LineIcon'
import TwitterIcon from '@/components/icon/TwitterIcon'
import FacebookIcon from '@/components/icon/FacebookIcon'
import GoogleIcon from '@/components/icon/GoogleIcon'
import { Registationvalidation } from '@/components/Validation/RegistationValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useRouter } from 'next/router'
const SignIn = () => {
  const Router = useRouter()
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    email: '',

    password: ''
  }
  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2))
  }
  return (
    <div className="flex w-full">
      <HeroComponent name="Sign In !" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar />
        <div className="my-5 text-center">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <h1 className="text-xl my-2">
            To stay connected with us please login with your personal info
          </h1>
        </div>
        <div>
          <LineIcon />
          <div className="flex  justify-between mt-5">
            <FacebookIcon />
            <TwitterIcon />
            <GoogleIcon />
          </div>
        </div>
        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={Registationvalidation}
          onSubmit={handleSubmit}
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
                <h1>Forgot Password ?</h1>
              </div>
              <Button onClick={() => handleSubmit}>Sign In</Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default SignIn
