import React from 'react'
import Image from 'next/image'
const HeroComponent = ({ name }: { name: string }) => {
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
          <h1 className="text-5xl font-headingBold mt-10 mb-3">{name}</h1>
        </div>
        <div className="flex justify-end items-end content-end h-1/5">
          <Image src="/images/arrow.png" alt="" width={120} height={120} />
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
