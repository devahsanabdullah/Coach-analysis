import React, { useState } from 'react'
import SelectionMenu from '../Dropdown/NewDrop'
import TickIcon from '../icon/TickIcon'
import { Button } from '@/components/twin'
import { useRouter } from 'next/router'
const Subcription = () => {
  const [coachChecked, setCoachChecked] = useState(true)
  const [groupChecked, setGroupChecked] = useState(false)
  const [feature, setFeature] = useState(false)
  const Router = useRouter()
  const styleed =
    'bg-[#ebf0f5] border-none h-12 text-gray-500 text-md rounded-lg mt-5 focus:outline-none block w-96 p-2.5 '
  const benifit = [
    'Coach Review',
    'tracking and reporting',
    'Videos Highlight',
    'Coach Review',
    'tracking and reporting',
    'Videos Highlight'
  ]
  const handleCoach = () => {
    setCoachChecked(true)
    setGroupChecked(false)
  }
  const handleGroup = () => {
    setCoachChecked(false)
    setGroupChecked(true)
  }
  return (
    <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
      <div className="flex mt-10  text-[#2c5c92]">
        <h1>Home</h1>
        <div className=" border-r  h-5 mx-2 mt-1  border-black "></div>
        <h1>How its work</h1>
      </div>
      <h1 className="text-4xl font-extrabold mt-6">Subcription</h1>
      <p className="my-5 text-2xl text-gray-600  font-serif">
        Choose a Subcription Plan{' '}
      </p>
      <div className="flex ">
        <div className="flex items-center mx-2 justify-center">
          <div className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 ">
            <input
              type="radio"
              checked={coachChecked}
              onClick={handleCoach}
              className="w-3  checked:border-[#00CCFB] border cursor-pointer h-3 p-0 border-[#00CCFB] rounded-full checked:bg-[#00CCFB] appearance-none   "
              name=""
              id=""
            />
          </div>
          <h1 className="text-xl  font-bold">Individual Coach</h1>
        </div>
        <div className="flex mx-2 items-center justify-center">
          <div className="bg-[#f7f7f7] shadow-2xl  w-5  cursor-pointer rounded-full items-center justify-center flex  h-5 ">
            <input
              type="radio"
              checked={groupChecked}
              onClick={handleGroup}
              className="w-3 cursor-pointer h-3 p-0 border-[#00CCFB] checked:border-[#00CCFB] border rounded-full checked:bg-[#00CCFB] appearance-none   "
              name=""
              id=""
            />
          </div>
          <h1 className="text-xl  font-bold">Group/Club</h1>
        </div>
      </div>

      <SelectionMenu />

      <div className="flex w-1/2 mt-4 text-[#2C5C92]">
        <h1 className="text-4xl font-extrabold items-start ">
          {feature ? '$239' : '140'}
        </h1>
        <p className="text-lg  flex justify-end items-end">/month</p>
      </div>
      {groupChecked && (
        <div className="w-full items-center flex  flex-col justify-center">
          <SelectionMenu />
          <input type="text" className={styleed} placeholder="Add Club Name" />
        </div>
      )}
      <div className=" w-1/2 flex  justify-between items-center my-5">
        <div className="flex flex-col">
          {benifit.length > 5 &&
            benifit.map((item) => {
              return (
                <div className="flex  mt-2">
                  <TickIcon />
                  <h1 className="text-gray-500 text-md ml-2">{item}</h1>
                </div>
              )
            })}
        </div>
        <div className="flex flex-col">
          {benifit.length > 5 &&
            benifit.map((item) => {
              return (
                <div className="flex  mt-2">
                  <TickIcon />
                  <h1 className="text-gray-500 text-md ml-2">{item}</h1>
                </div>
              )
            })}
        </div>
      </div>

      <div
        onClick={() => setFeature(() => !feature)}
        className={`${
          feature
            ? 'text-[#2C5C92] bg-[#F3F6F9] border-[#2C5C92] border-2'
            : 'bg-[#f2f2f2] text-gray-500'
        } w-auto cursor-pointer  p-4  h-auto rounded-md`}
      >
        <div className="flex justify-between">
          <h1>Addition Feature</h1>
          <h1 className="text-lg font-bold">$99</h1>
        </div>
        <div className="flex mt-2  justify-between">
          <p>- Lorem ipsum dolor sit amet</p>
          <p className="pl-3">- Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex  mt-2 justify-between">
          <p>- Consectetur adipiscing elit</p>
          <p className="pl-2">- Consectetur adipiscing elit</p>
        </div>
        <div className="flex mt-2  justify-between">
          <p>- Sed do eiusmod tempor</p>
          <p className="pl-2"> - Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <SelectionMenu />

      <Button onClick={() => Router.push('/signup')}>Subscribe</Button>
    </div>
  )
}

export default Subcription
