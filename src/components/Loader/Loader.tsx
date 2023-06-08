import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className="flex flex-col space-y-32 w-screen h-screen justify-center items-center bg-opacity-50 absolute z-50 bg-[#2C5C92] ">
      {' '}
      <Image src="/images/logo.png" alt="" width={200} height={200} />
      <div className=" ">
        <>
          <div className="loader">
            <div className="dot" />
          </div>
          <div className="loader">
            <div className="dot" />
          </div>
          <div className="loader">
            <div className="dot" />
          </div>
          <div className="loader">
            <div className="dot" />
          </div>
          <div className="loader">
            <div className="dot" />
          </div>
          <div className="loader">
            <div className="dot" />
          </div>
        </>
      </div>
    </div>
  )
}

export default Loader
