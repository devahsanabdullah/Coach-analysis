import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React, { useState } from 'react'
import { Button } from '@/components/twin'
import { PaymentvalidationSchema } from '@/components/Validation/PaymentValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useRouter } from 'next/router'
const Payment = () => {
  const [debetCard, setDebetCard] = useState(false)
  const [paypal, setPaypal] = useState(false)
  const Router = useRouter()
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    name: '',
    cardNumber: '',
    month: '',
    cvv: ''
  }
  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2))
    Router.push('/sigin')
  }
  return (
    <div className="flex w-full">
      <HeroComponent name="Payment" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar />
        <div className="my-5 text-center">
          <h1 className="text-3xl ">
            Please Fill in your payment details below
          </h1>
        </div>
        <div className="flex ">
          <div className="flex items-center mx-2 justify-center">
            <div className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 ">
              <input
                type="radio"
                checked={debetCard}
                onClick={() => setDebetCard(() => !debetCard)}
                className="w-3  checked:border-[#00CCFB] border cursor-pointer h-3 p-0 border-[#00CCFB] rounded-full checked:bg-[#00CCFB] appearance-none   "
                name=""
                id=""
              />
            </div>
            <h1 className="text-xl ml-2">Credit Card or Debit Card</h1>
          </div>
          <div className="flex mx-2 items-center justify-center">
            <div className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 ">
              <input
                type="radio"
                checked={paypal}
                onClick={() => setPaypal(() => !paypal)}
                className="w-3 cursor-pointer h-3 p-0 border-[#00CCFB] checked:border-[#00CCFB] border rounded-full checked:bg-[#00CCFB] appearance-none   "
                name=""
                id=""
              />
            </div>
            <h1 className="text-xl  font-bold ml-2">Paypal</h1>
          </div>
        </div>

        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={PaymentvalidationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name on Card"
                  className={styleed}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  className={styleed}
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="month"
                  name="month"
                  placeholder="MM/YY"
                  className={styleed}
                />
                <ErrorMessage
                  name="month"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="cvv"
                  className={styleed}
                />
                <ErrorMessage
                  name="cvv"
                  component="div"
                  className="error text-red-500 pl-5 pt-3"
                />
              </div>

              <Button onClick={() => handleSubmit}>pay $239</Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Payment
