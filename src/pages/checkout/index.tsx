import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import IsgraterIcon from '@/components/icon/IsgraterIcon'
import { Button } from '@/components/twin'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const Router = useRouter()
  const checkData: any = useSelector((state: any) => state.checkout)
  console.log(checkData)
  const styleed =
    'bg-[#ebf0f5] border-none  flex  justify-center items-center h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block  p-2.5 '
  const checkout = [
    {
      title: 'Subcription',
      subtitle: checkData?.group?.title,
      amount: 0
    },
    {
      title: 'Subcription Type',
      subtitle: checkData?.subcription?.title,
      amount: checkData?.subcription?.price
    },
    {
      title: 'Number of Coach',
      subtitle: checkData?.coach_range
        ? checkData?.coach_range.value
        : checkData?.group?.default_coach_range,
      amount: checkData?.coach_range ? checkData.coach_range.price : 0
    },
    {
      title: 'Data Storage',
      subtitle: checkData?.storage_bandwidth?.bandwidth
        ? `${checkData?.storage_bandwidth?.bandwidth} GB`
        : `${checkData?.group?.default_storage_range} Gb`,
      amount: checkData?.storage_bandwidth?.bandwidth
        ? checkData?.storage_bandwidth.price
        : 0
    }
  ]

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
                    ${item.amount}
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
              placeholder="Enter Coupen Code"
              className="outlline-none  focus:outline-none border-none bg-transparent "
            />
            <IsgraterIcon />
          </div>
        </div>
        <div className="w-full px-10 ">
          <h1 className="pl-5 text-[#353535] pt-3 text-xl font-headingBook">
            Discount %
          </h1>
          <div className="flex px-5 pt-2 pb-3 justify-between">
            <h1 className="text-[#2C5C92] text-xl font-bold">0 %</h1>
            <h1 className="text-black text-xl font-bold">$0</h1>
          </div>
          <hr className={'border-black'} />
        </div>
        <div className="flex justify-end w-full flex-col items-end px-10 mt-5">
          <h1 className="text-2xl font-headingBold">Total Amount</h1>
          <h1 className="text-[#2C5C92] text-2xl font-bold">
            ${checkData?.totalPrice}
          </h1>
        </div>

        <Button onClick={() => Router.push('/payment')}>Checkout</Button>
      </div>
    </div>
  )
}

export default Checkout
