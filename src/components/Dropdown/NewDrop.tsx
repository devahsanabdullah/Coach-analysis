import { useState } from 'react'
import DropIcon from '../icon/DropIcon'

const SelectionMenu = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

  return (
    <div className="relative w-2/5  mt-5">
      <div className="relative">
        <div
          className="mt-5 bg-[#ebf0f5] flex justify-between  items-center pl-3 text-gray-500 h-12 text-sm px-4 py-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          {selectedOption || 'Select an option'}
          <DropIcon />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectionMenu
