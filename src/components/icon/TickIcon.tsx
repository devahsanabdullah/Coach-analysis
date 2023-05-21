import React from 'react'

const TickIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="15" fill="#00AB5E"></circle>
      <path
        fill="#00DF76"
        d="M0 15C0 6.716 6.716 0 15 0v30C6.716 30 0 23.284 0 15z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M8 14.667L12.8 20 20 8"
      ></path>
    </svg>
  )
}

export default TickIcon
