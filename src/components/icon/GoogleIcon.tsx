import React from 'react'

const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      fill="none"
      viewBox="0 0 58 58"
    >
      <g filter="url(#filter0_d_0_1)">
        <path
          fill="#fff"
          d="M54 25c0 13.807-11.193 25-25 25S4 38.807 4 25 15.193 0 29 0s25 11.193 25 25z"
        ></path>
      </g>
      <path
        fill="#385C8E"
        fillRule="evenodd"
        d="M38.7 22.413v-3.76h-2.3v3.76h-2.3v3.762h2.3v3.76h2.3v-3.76H41v-3.762h-2.3zm-6.44 0c.062 0 .115 1.64.115 2.428 0 6.852-2.808 12.159-7.041 12.159C21.28 37 18 31.631 18 25.003 18 18.373 21.28 13 25.334 13c1.98 0 3.636 1.162 4.913 3.116l-1.99 3.097c-.544-.858-1.499-1.928-2.923-1.928-2.504 0-4.547 3.237-4.547 7.417s2.043 7.264 4.547 7.264c2.902 0 3.992-3.91 4.16-5.791H24.9v-3.762h7.36z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_0_1"
          width="58"
          height="58"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default GoogleIcon
