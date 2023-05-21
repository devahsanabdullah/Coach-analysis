import React from 'react'

const TwitterIcon = () => {
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
        d="M41.433 14.885a8.448 8.448 0 01-1.209.538 7.01 7.01 0 001.089-2.337.561.561 0 00-.133-.535.345.345 0 00-.457-.039 8.595 8.595 0 01-2.813 1.358c-.998-1.192-2.355-1.87-3.756-1.87-2.96 0-5.367 2.94-5.367 6.555 0 .285.014.568.044.847-3.672-.394-7.087-2.599-9.43-6.111a.374.374 0 00-.345-.18.404.404 0 00-.317.243 7.695 7.695 0 00-.727 3.296c0 1.58.462 3.078 1.278 4.25a4.191 4.191 0 01-.719-.392.34.34 0 00-.396.003.518.518 0 00-.203.416v.087c0 2.358 1.039 4.48 2.627 5.637a3.809 3.809 0 01-.408-.072c-.14-.033-.284.027-.378.157a.576.576 0 00-.082.477c.588 2.242 2.102 3.891 3.931 4.394-1.517 1.16-3.253 1.769-5.075 1.769a7.97 7.97 0 01-1.136-.081c-.186-.028-.364.107-.427.322-.064.217.003.457.162.581C19.526 36.031 22.233 37 25.012 37c5.464 0 8.882-3.147 10.787-5.787 2.376-3.292 3.739-7.65 3.739-11.955 0-.18-.003-.361-.007-.542a12.075 12.075 0 002.401-3.107.581.581 0 00-.027-.59c-.115-.168-.307-.223-.472-.134z"
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

export default TwitterIcon
