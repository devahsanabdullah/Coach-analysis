import React from 'react'
import Image from 'next/image'

const SideApp = () => {
  return (
    <div className="hidden md:block ">
      <div className="bg-[#2C5C92] flex   h-screen   fixed left-0  w-1/3 text-white">
        <div className="flex justify-between flex-col h-screen">
          <div>
            <div className="ml-2">
              <Image src="/images/dot.png" alt="" width={120} height={120} />
            </div>
          </div>
          <div className="bottom-0">
            <Image src="/images/circule.png" alt="" width={120} height={120} />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <Image src="/images/logo.png" alt="" width={200} height={200} />
          <h1 className="text-4xl mt-10 font-headingBold mb-3">
            Welcome Back!
          </h1>
          <p className="text-lg font-headingBook">To stay connected with us</p>
          <p className="text-lg font-headingBook">
            Please login with your personal info
          </p>
          <button className="  w-52 border mt-10 text-xl font-headingBook border-white rounded-md h-10">
            Sign In
          </button>
        </div>
        <div className="flex justify-end items-end h-1/5">
          <Image src="/images/arrow.png" alt="" width={120} height={120} />
        </div>
      </div>
    </div>
  )
}

export default SideApp
