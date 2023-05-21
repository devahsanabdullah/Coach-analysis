import React from 'react'

const FacebookIcon = () => {
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
        d="M23.383 25.315h2.604v11.282c0 .222.172.403.383.403h4.415c.212 0 .384-.18.384-.403V25.368h2.993a.391.391 0 00.38-.357l.455-4.153a.417.417 0 00-.094-.315.375.375 0 00-.286-.135h-3.448v-2.603c0-.785.401-1.183 1.193-1.183h2.255c.212 0 .383-.18.383-.403v-3.813a.393.393 0 00-.383-.403H31.51a2.922 2.922 0 00-.143-.003c-.539 0-2.412.111-3.893 1.544-1.64 1.588-1.412 3.49-1.357 3.82v3.044h-2.734a.393.393 0 00-.383.403v4.1c0 .223.172.404.383.404z"
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

export default FacebookIcon
