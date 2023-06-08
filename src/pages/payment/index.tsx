import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React, { useState } from 'react'
import { Button } from '@/components/twin'
import { PaymentvalidationSchema } from '@/components/Validation/PaymentValidation'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import PaypalIcon from '@/components/icon/PaypalIcon'
// import { useRouter } from 'next/router'
import MonthDropdown from '@/components/Dropdown/monthDropdown'
import YearDropdown from '@/components/Dropdown/YearDropdown'
import { useSelector } from 'react-redux'
import axios from 'axios'
// import { toast } from 'react-toastify';

const Payment = () => {
  const [debetCard, setDebetCard] = useState(true)
  const [paypal, setPaypal] = useState(false)
  // const [month,setMonth]=useState<any>()
  // const [year,setYear]=useState<any>()
  const checkData = useSelector((state: any) => state.checkout)
  // const Router = useRouter()
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 text-lg  placeholder:font-headingBook appearance-none  rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const initialValues = {
    card_holder: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: ''
  }

  return (
    <div className="flex w-full">
      <HeroComponent name="Payment" />
      <div className="flex flex-col items-center md:w-2/3 w-full pb-5 overflow-y-auto ml-auto ">
        <Appbar route="/checkout" />
        <div className="my-5 text-center">
          <h1 className="text-4xl font-headingBook ">
            Please Fill in your payment details below
          </h1>
        </div>
        <div className="flex ">
          <div className="flex items-center mx-2 justify-center">
            <div
              onClick={() => {
                setDebetCard(true)
                setPaypal(false)
              }}
              className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 "
            >
              <input
                type="radio"
                checked={debetCard}
                onChange={() => {
                  setDebetCard(true)
                  setPaypal(false)
                }}
                className="w-3  checked:border-[#00CCFB] border cursor-pointer h-3 p-0 border-[#00CCFB] rounded-full checked:bg-[#00CCFB] appearance-none   "
                name=""
                id=""
              />
            </div>
            <h1 className="text-xl font-headingBold ml-2">
              Credit Card or Debit Card
            </h1>
          </div>
          <div className="flex mx-2 items-center justify-center">
            <div
              onClick={() => {
                setDebetCard(false)
                setPaypal(true)
              }}
              className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 "
            >
              <input
                type="radio"
                checked={paypal}
                onChange={() => {
                  setDebetCard(false)
                  setPaypal(true)
                }}
                className="w-3 cursor-pointer h-3 p-0 border-[#00CCFB] checked:border-[#00CCFB] border rounded-full checked:bg-[#00CCFB] appearance-none   "
                name=""
                id=""
              />
            </div>
            <h1 className="text-xl  font-bold ml-2">
              <PaypalIcon />
            </h1>
          </div>
        </div>

        {/* <div  className='w-full flex flex-col items-center justify-center'> */}
        <Formik
          initialValues={initialValues}
          validationSchema={PaymentvalidationSchema}
          onSubmit={(values) => {
            const storedToken: any = localStorage.getItem('Usertoken')
            const data = {
              type: debetCard ? 'stripe' : 'paypal',
              card_holder: values.card_holder,
              card_number: values.cardNumber,
              exp_month: values.month,
              exp_year: values.year,
              cvv: values.cvv,
              price: checkData?.totalPrice,
              plan_id: checkData?.group?.id,
              frequency: checkData?.subcription,
              storage_plan: checkData?.storage_bandwidth,
              coach_range: checkData?.coach_range?.id,
              addon: checkData?.addon?.map((obj: any) => obj.id)
            }
            console.log(data, 'mypayment')
            //         "type": "stripe",
            // "card_holder": "zeeshan",
            // "card_number": "378282246310005",
            // "exp_month": "06",
            // "exp_year": "2023",
            // "cvv": "123",
            // "price": 123,
            // "plan_id": "5",
            // "frequency": "monthly",
            // "storage_plan": "1",
            // "coach_range": "2",
            // "addon": "1,2,3"
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${storedToken}`

            axios
              .post(
                'https://veo.api.almerajgroups.com/api/coaches/payment',
                data
              )
              .then((response: any) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
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
                  className=" error text-red-500 text-sm font-headingBook pt-2"
                />
              </div>
              <div className="">
                <Field
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  className={styleed}
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="error text-red-500 text-xs  pt-2"
                />
              </div>

              <div className="flex space-x-6  w-full">
                <div className="w-1/2 flex flex-col">
                  <MonthDropdown setFieldValue={setFieldValue} />
                  <ErrorMessage
                    name="month"
                    component="div"
                    className="error text-red-500 text-xs  pt-2"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <YearDropdown setFieldValue={setFieldValue} />
                  <ErrorMessage
                    name="year"
                    component="div"
                    className="error text-red-500 text-xs  pt-2"
                  />
                </div>
              </div>
              <div className="">
                <Field
                  type="number"
                  id="cvv"
                  name="cvv"
                  placeholder="cvv"
                  className={styleed}
                />
                <ErrorMessage
                  name="cvv"
                  component="div"
                  className="error text-red-500 text-xs  pt-2"
                />
              </div>

              {/* <div className="">
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
                  className="error text-red-500 text-sm font-headingBook pt-2"
                />
              </div> */}

              <Button
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)',
                  marginTop: '40px'
                }}
                type="submit"
              >
                pay $
                <span className=" font-medium">{checkData?.totalPrice}</span>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Payment
