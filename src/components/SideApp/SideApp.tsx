import React from 'react'
import Image from 'next/image'

const SideApp = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#2c5c92]  h-screen items-center flex justify-center  fixed left-0  w-1/3 text-white">
        <div className="flex justify-center items-center flex-col">
          <Image src="/images/logo.png" alt="" width={200} height={200} />
          <h1 className="text-5xl mt-10 font-headingBold mb-3">
            Welcome Back!
          </h1>
          <p className="text-xl font-headingBook">To stay connected with us</p>
          <p className="text-xl font-headingBook">
            Please login with your personal info
          </p>
          <button className="  w-52 border mt-10 text-xl font-headingBook border-white rounded-md h-10">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideApp
