import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import { Button } from '@/components/twin'
import { CodevalidationSchema } from '@/components/Validation/CodeValidation'
import { Formik, Field, Form, getIn } from 'formik'
import { useRouter } from 'next/router'
const ForgotPassword = () => {
  const Router = useRouter()
  const styled =
    ' bg-[#ebf0f5] border-none h-12 text-gray-500 text-md rounded-lg mt-5 ml-2 focus:outline-none block w-full p-2.5'
  const initialValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  }
  function getStyles(errors: any, fieldName: string): any {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }

  return (
    <div className="flex w-full">
      <HeroComponent name="Forgot Password" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar />
        <div className="my-5 text-center">
          <h1 className="text-4xl font-headingBold">Forgot Your Password?</h1>
          <h1 className="text-2xl font-font my-2">
            Enter Your Email and a 6-digit code will be sent to you
          </h1>
        </div>

        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={CodevalidationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
            Router.push('/')
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-center"
            >
              <div className="w-96">
                <div className="flex justify-between mb-4">
                  <Field
                    type="text"
                    name="code1"
                    className={styled}
                    style={
                      getStyles(errors, `code1`) && getStyles(touched, `code1`)
                    }
                  />
                  <Field
                    type="text"
                    name="code2"
                    className={styled}
                    min={0}
                    max={1}
                    style={
                      getStyles(errors, `code2`) && getStyles(touched, `code2`)
                    }
                  />
                  <Field
                    type="text"
                    name="code3"
                    style={
                      getStyles(errors, `code3`) && getStyles(touched, `code3`)
                    }
                    className={styled}
                  />
                  <Field
                    type="text"
                    name="code4"
                    className={styled}
                    style={
                      getStyles(errors, `code4`) && getStyles(touched, `code4`)
                    }
                  />
                  <Field
                    type="text"
                    name="code5"
                    style={
                      getStyles(errors, `code5`) && getStyles(touched, `code5`)
                    }
                    className={styled}
                  />
                  <Field
                    type="text"
                    name="code6"
                    className={styled}
                    style={
                      getStyles(errors, `code6`) && getStyles(touched, `code6`)
                    }
                  />
                </div>

                <Button
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)'
                  }}
                  type="submit"
                >
                  Verify
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default ForgotPassword
