import React from 'react'
import Image from 'next/image'
const HeroComponent = ({ name }: { name: string }) => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#2c5c92]  h-screen items-center flex justify-center  fixed left-0  w-1/3 text-white">
        <div className="flex justify-center items-center flex-col">
          <Image src="/images/logo.png" alt="" width={200} height={200} />
          <h1 className="text-5xl font-headingBold mt-10 mb-3">{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
