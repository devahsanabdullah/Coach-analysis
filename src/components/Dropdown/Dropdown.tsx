import React from 'react'

const Dropdown = () => {
  return (
    <div className=" w-2/5 mt-5">
      <select
        id="countries"
        className="bg-[#ebf0f5] pl-3 text-gray-900 text-sm rounded-md h-10 focus:outline-none block w-full p-2.5 outline-none"
      >
        <option value="US">monthly subcriotion</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  )
}

export default Dropdown
