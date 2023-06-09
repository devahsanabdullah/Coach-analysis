import HeroComponent from '@/components/HeroComponet/HeroComponent'
import Appbar from '@/components/Appbar/Appbar'
import React from 'react'
import ResendOtp from '@/components/Otp/ResendOtp'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader/Loader'
const ResendEmail = () => {
  const [loade, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 8000)
  }, [])
  return (
    <>
      {loade && <Loader />}
      <div className="flex w-full">
        <HeroComponent name="OTP Verify" />
        <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
          <Appbar route="/signup" />
          <div className="my-5 text-center">
            <h1 className="text-2xl font-font my-2">
              Enter Your Email and a 6-digit code will be sent to you
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <ResendOtp />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResendEmail
