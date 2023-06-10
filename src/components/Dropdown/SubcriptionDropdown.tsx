import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function SubcriptionDropdown({
  setSubcription
}: {
  setSubcription: any
}) {
  const lists = [
    { title: 'Monthly Subscription', price: 140 },
    { title: 'Yearly Subscription', price: 340 }
  ]
  const [drop, setDrop] = useState({ title: 'Monthly Subscription' })

  const handleChange = (item: any) => {
    setDrop(item)
    setSubcription(item)
  }
  return (
    <div>
      <Menu as="div" className="relative text-lg font-headingBook w-full">
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
                            {drop.title}
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
            className={
              'absolute z-50 text-lg text-gray-400 font-headingBook w-full '
            }
          >
            <div className=" !bg-white right-0 mt-2   origin-top-center  shadow-sm border">
              {lists &&
                lists.map((items: any, index: number) => {
                  return (
                    <Menu.Item as={Fragment} key={index}>
                      <div className="hover:bg-gray-300">
                        <div
                          onClick={() => handleChange(items)}
                          className="flex cursor-pointer  py-3 ml-3 items-center"
                        >
                          <div className="ml-2">
                            <h1 className="text-gray-500 text-sm">
                              {items.title}
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
