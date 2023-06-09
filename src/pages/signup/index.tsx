import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
// import LineIcon from '@/components/icon/LineIcon'
// import TwitterIcon from '@/components/icon/TwitterIcon'
// import FacebookIcon from '@/components/icon/FacebookIcon'
// import GoogleIcon from '@/components/icon/GoogleIcon'
import { useDispatch } from 'react-redux'
import { setuserData } from '@/services/action/action'
import { Registationvalidation } from '@/components/Validation/RegistationValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState } from 'react'
import LoaderIcon from '@/components/icon/LoaderIcon'
const Login = () => {
  const Router = useRouter()
  const dispatch = useDispatch()
  const [verify, setVerify] = useState(false)
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 placeholder:font-headingBook text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    first_name: '',
    last_name: '',
    club_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
  // const handleSubmit = (values: any) => {
  //   alert(JSON.stringify(values, null, 2))
  //   Router.push('/sigin')
  // }
  return (
    <div className="flex w-full">
      <HeroComponent name="Sign Up !" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar route={'/'} />
        <div className="my-5 text-center">
          <h1 className="text-4xl font-headingBold">Let's Get Started</h1>
          <h1 className="text-2xl font-headingBook my-2">Create an Account</h1>
        </div>
        {/* <div>
          <LineIcon />
          {/* <div className="flex  justify-between mt-5">
            <FacebookIcon />
            <TwitterIcon />
            <GoogleIcon />
          </div> */}
        {/* </div> */}

        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={Registationvalidation}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            if (values) {
              setVerify(true)

              axios
                .post(
                  'https://veo.api.almerajgroups.com/api/coaches/register',
                  values
                )
                .then((response) => {
                  if (response.data) {
                    localStorage.setItem(
                      'userData',
                      JSON.stringify(response.data)
                    )
                    dispatch(setuserData(response.data))
                    console.log(response.data, 'user')
                    Router.push('/verification')
                    setVerify(false)
                    toast.success('success Sign up')
                  }
                })
                .catch((error) => {
                  if (error.response && error.response.data) {
                    if (error.response.status === 400) {
                      // Handle validation errors
                      const { errors } = error.response.data
                      Object.keys(errors).forEach((fieldName) => {
                        setFieldError(fieldName, errors[fieldName][0])
                      })
                      setVerify(false)
                    } else {
                      // Handle other errors
                      console.error(error.response.data.message)
                      setVerify(false)
                    }
                  } else {
                    console.error(error)
                  }
                })
            }
            setSubmitting(false)
          }}
        >
          {() => (
            <Form>
              <div className="">
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  className={styleed}
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error text-red-500 text-sm font-headingBook pt-2"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="fullname"
                  name="last_name"
                  placeholder="Last Name"
                  className={styleed}
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="error text-red-500 text-sm font-headingBook pt-2"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="fullname"
                  name="club_name"
                  placeholder="Club Name"
                  className={styleed}
                />
                <ErrorMessage
                  name="club_name"
                  component="div"
                  className="error text-red-500 text-sm font-headingBook pt-2"
                />
              </div>
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
                  className="error text-red-500  text-sm font-headingBook pt-2"
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
                  className="error text-red-500 text-sm font-sans pt-2"
                />
              </div>
              <div className="">
                <Field
                  type="password"
                  id="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  className={styleed}
                />
                <ErrorMessage
                  name="password_confirmation"
                  component="div"
                  className="error text-red-500 text-sm font-headingBook pt-2"
                />
              </div>
              <Button
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)'
                }}
                type="submit"
              >
                {verify ? <LoaderIcon /> : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Login
