import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React, { useState } from 'react'
import IsgraterIcon from '@/components/icon/IsgraterIcon'
import { Button } from '@/components/twin'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import DiscountLoader from '@/components/icon/DiscountLoader'
import { checkoutAmount } from '@/services/action/action'
const Checkout = () => {
  const [discount, setDiscount] = useState<string>()
  const [verify, setVerify] = useState(false)
  const [showDiscount, setShowDiscount] = useState<any>()
  const [discountValue, setDiscountValue] = useState<any>()
  const [fixed, setFixedValue] = useState<any>()
  const Router = useRouter()
  const dispatch = useDispatch()
  const checkData: any = useSelector((state: any) => state.checkout)

  console.log(checkData)
  const styleed =
    'bg-[#ebf0f5] border-none  flex  justify-center items-center h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block  p-2.5 '
  const checkout = [
    {
      title: 'Subcription',
      subtitle: checkData?.group?.title,
      amount:
        checkData?.subcription?.title === 'Monthly Subscription'
          ? `$${checkData?.group?.monthly_price}`
          : `$${checkData?.group?.monthly_price}`
    },
    {
      title: 'Subcription Type',
      subtitle: checkData?.subcription?.title,
      amount: ''
    },
    {
      title: 'Number of Coach',
      subtitle: checkData?.coach_range
        ? checkData?.coach_range.value
        : checkData?.group?.default_coach_range,
      amount: checkData?.coach_range ? `$${checkData.coach_range.price}` : '$0'
    },
    {
      title: 'Data Storage',
      subtitle: checkData?.storage_bandwidth?.bandwidth
        ? `${checkData?.storage_bandwidth?.bandwidth} GB`
        : `${checkData?.group?.default_storage_range} Gb`,
      amount: checkData?.storage_bandwidth?.bandwidth
        ? checkData?.storage_bandwidth.price
        : '$0'
    }
  ]

  const handleDiscount = () => {
    if (discount) {
      setVerify(true)
      axios
        .get(`https://veo.api.almerajgroups.com/api/discounts/slug/${discount}`)
        .then((response) => {
          console.log(response.data)
          setDiscountValue(response.data.data)
          setVerify(false)
          toast.success('successful Dicount Get')
          // Router.push('/otp')
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            toast.error('invalid promo code')
          } else {
            console.error(error)
            toast.error('invalid promo code')
          }
          setVerify(false)
        })
    }
  }
  const calculateDiscountedAmount: any = useMemo(() => {
    let discountedAmount = parseFloat(checkData?.totalPrice)

    if (discountValue?.type === 'percentage') {
      const discount =
        (parseFloat(checkData?.totalPrice) * parseFloat(discountValue?.value)) /
        100.0
      setShowDiscount(discount)
      discountedAmount -= discount
    } else if (discountValue?.type === 'fixed') {
      const fixedValue = parseFloat(discountValue?.value)
      if (fixedValue <= discountedAmount) {
        setFixedValue(fixedValue.toFixed(2))
        discountedAmount -= fixedValue
      } else {
        discountedAmount = 0.0
      }
    } else {
      discountedAmount = parseFloat(checkData?.totalPrice)
    }

    return discountedAmount
  }, [checkData?.totalPrice, discountValue])

  // useEffect(() => {
  //   const data = { ...checkData, totalPrice: calculateDiscountedAmount }
  //   dispatch(checkoutAmount(data))
  // }, [calculateDiscountedAmount])

  const handleCheckout = () => {
    const data = { ...checkData, totalPrice: calculateDiscountedAmount }
    if (calculateDiscountedAmount) {
      dispatch(checkoutAmount(data))
      Router.push('/payment')
    }
  }

  return (
    <div className="flex w-full">
      <HeroComponent name="Checkout" />
      <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
        <Appbar route="/verification" />
        <div className="my-5 text-center">
          <h1 className="text-4xl ml-2 font-headingBold">Checkout</h1>
        </div>
        <div className="w-full px-10 ">
          {checkout.map((item) => {
            return (
              <>
                <h1 className="pl-5 text-[#353535] pt-3 text-base font-headingBook">
                  {item.title}
                </h1>
                <div className="flex px-5 pt-2 pb-3 justify-between">
                  <h1 className="text-[#2C5C92] text-xl font-bold">
                    {item.subtitle}
                  </h1>
                  <h1 className="text-black text-xl font-bold">
                    {item.amount}
                  </h1>
                </div>
                <hr />
              </>
            )
          })}
          <h1 className="pl-5 text-[#353535] pt-3 text-base font-headingBook">
            Add ons
          </h1>
          {checkData.addon_selected &&
            checkData.addon_selected.map((item: any, index: number) => {
              return (
                <>
                  <div key={index} className="flex px-5  py-5 justify-between">
                    <h1 className="text-[#2C5C92] text-base font-bold">
                      {item?.title}
                    </h1>
                    <h1 className="text-black text-xl font-bold">
                      ${item?.price}
                    </h1>
                  </div>
                  <hr />
                </>
              )
            })}
        </div>
        <div className="flex justify-end w-full flex-col items-end px-10 mt-5">
          <h1 className="text-2xl font-headingBook">Sub Total</h1>
          <h1 className="text-[#2C5C92] text-2xl font-bold">
            ${checkData?.totalPrice}
          </h1>
        </div>
        <div className="flex justify-start w-full px-10 pb-5">
          <div className={styleed}>
            <input
              type="text"
              value={discount}
              placeholder="Enter Coupen Code"
              onChange={(e) => setDiscount(e.target.value)}
              className="outlline-none  focus:outline-none border-none bg-transparent "
            />
            <div onClick={handleDiscount} className="w-7 cursor-pointer">
              {verify ? <DiscountLoader /> : <IsgraterIcon />}
              {/* <LoaderIcon /> */}
            </div>
          </div>
        </div>
        <div className="w-full px-10 ">
          <h1 className="pl-5 text-[#353535] pt-3 text-xl font-headingBook">
            Discount %
          </h1>
          <div className="flex px-5 pt-2 pb-3 justify-between">
            <h1 className="text-[#2C5C92] text-xl font-bold">
              {discountValue
                ? discountValue.type === 'fixed'
                  ? `${discountValue.value}$`
                  : `${discountValue.value}%`
                : '0%'}
            </h1>
            <h1 className="text-black text-xl font-bold">
              {discountValue
                ? discountValue.type === 'fixed'
                  ? fixed
                    ? fixed
                    : '0$'
                  : `${parseFloat(showDiscount).toFixed(2)}$`
                : '0%'}
            </h1>
          </div>
          <hr className={'border-black'} />
        </div>
        <div className="flex justify-end w-full flex-col items-end px-10 mt-5">
          <h1 className="text-2xl font-headingBold">Total Amount</h1>
          <h1 className="text-[#2C5C92] text-2xl font-bold">
            ${parseFloat(calculateDiscountedAmount).toFixed(2)}
          </h1>
        </div>

        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  )
}

export default Checkout
