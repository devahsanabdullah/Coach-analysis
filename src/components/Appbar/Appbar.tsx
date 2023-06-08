import React from 'react'
import BackIcon from '../icon/BackIcon'
import { useRouter } from 'next/router'
const Appbar = ({ route }: { route: string }) => {
  const Router = useRouter()
  return (
    <div className="mt-10 w-full flex justify-between items-center font-headingBook text-[#2c5c92]">
      <div onClick={() => Router.push(route)} className=" cursor-pointer ">
        <BackIcon />
      </div>
      <div className="flex">
        <h1>Home</h1>
        <div className=" border-r  h-5 mx-2 mt-1  border-black "></div>
        <h1>How its work</h1>
      </div>
      <div></div>
    </div>
  )
}

export default Appbar
