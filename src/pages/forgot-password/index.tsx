import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
import { Registationvalidation } from '@/components/Validation/RegistationValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
const ForgotPassword = () => {
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    email: ''
  }
  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2))
  }
  return (
    <div className="flex w-full">
      <HeroComponent name="Forgot Password" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar />
        <div className="my-5 text-center">
          <h1 className="text-3xl font-bold">Forgot Your Password?</h1>
          <h1 className="text-xl my-2">
            Enter Your Email and a 6-digit code will be sent to you
          </h1>
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

              <Button onClick={() => handleSubmit}>Send</Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default ForgotPassword