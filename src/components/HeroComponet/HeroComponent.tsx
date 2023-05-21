import React from 'react'

const HeroComponent = ({ name }: { name: string }) => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#2c5c92]  h-screen items-center flex justify-center  fixed left-0  w-1/3 text-white">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-extrabold mb-3">{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
