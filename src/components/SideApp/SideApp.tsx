import React from 'react'

const SideApp = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#2c5c92]  h-screen items-center flex justify-center  fixed left-0  w-1/3 text-white">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-extrabold mb-3">Welcome Back!</h1>
          <p className="text-lg font-serif">To stay connected with us</p>
          <p className="text-lg font-serif">
            Please login with your personal info
          </p>
          <button className="  w-52 border mt-10 text-lg font-serif border-white rounded-md h-10">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideApp
