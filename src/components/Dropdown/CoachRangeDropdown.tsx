import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function CoachRangeDropdown({
  options,
  setCoach,
  setFieldValue
}: {
  options: any
  setCoach: any
  setFieldValue: any
}) {
  const [drop, setDrop] = useState<any>()

  const handleChange = (item: any) => {
    setDrop(item)
    setCoach(item)
    setFieldValue('coach_range', item.value)
  }
  return (
    <div>
      <Menu as="div" className="relative text-lg  w-full">
        <div>
          <Menu.Button className={'w-full'}>
            {({ open }) => {
              return (
                <>
                  <div className="mt-5 bg-[#ebf0f5] flex justify-between  items-center pl-3 text-gray-500 h-12 text-sm px-4 py-2 rounded-md focus:outline-none">
                    <>
                      <div className="flex  items-center">
                        <div className="ml-2">
                          <p className="text-gary-500 text-left text-sm ">
                            {drop?.value
                              ? `${drop.value} Coaches`
                              : 'Select Number of Coaches'}
                          </p>
                        </div>
                      </div>
                      <div className=" cursor-pointer">
                        <ChevronUpIcon
                          className={`h-5 w-5 text-gray-500 ${
                            open ? ' rotate-0' : 'rotate-180'
                          } transition-all ease-in-out duration-150`}
                        />
                      </div>
                    </>
                  </div>
                </>
              )
            }}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={'absolute z-50  text-lg text-gray-400  w-full '}
          >
            <div className=" !bg-white right-0 mt-2   origin-top-center  shadow-sm border">
              {options &&
                options.map((items: any, index: number) => {
                  return (
                    <Menu.Item as={Fragment} key={index}>
                      <div className="hover:bg-gray-300">
                        <div
                          onClick={() => handleChange(items)}
                          className="flex cursor-pointer  py-3 ml-3 items-center"
                        >
                          <div className="mx-4 w-full flex justify-between">
                            <h1 className="text-gray-500  text-sm">
                              {items.value} Coaches
                            </h1>
                            <h1 className="text-gray-500 text-sm">
                              ${items.price}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Menu.Item>
                  )
                })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

// import { useState } from 'react'
// import DropIcon from '../icon/DropIcon'

// const CoachRangeDropdown = ({
//   options,
//   setCoach
// }: {
//   options: any
//   setCoach: any
// }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [selectedOption, setSelectedOption] = useState<any>()

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleOptionSelect = (option: any) => {
//     setSelectedOption(option)
//     setCoach(option)
//     setIsOpen(false)
//   }

//   return (
//     <div className="relative w-2/5  text-lg  mt-5">
//       <div className="relative">
//         <div
//           className="mt-5 bg-[#ebf0f5] flex justify-between  items-center pl-3 text-gray-500 h-12 text-sm px-4 py-2 rounded-md focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {selectedOption?.value || 'Select Coach Range'}
//           <DropIcon />
//         </div>
//         {isOpen && (
//           <div className="absolute z-10 mt-2 w-full  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//             <ul className="py-1">
//               {options.map((option: any) => (
//                 <li
//                   key={option.id}
//                   className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
//                   onClick={() => handleOptionSelect(option)}
//                 >
//                   {option.value}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CoachRangeDropdown
