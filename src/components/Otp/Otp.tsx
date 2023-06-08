import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { Button } from '../twin'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
toast
export default function OTP() {
  const [otp, setOtp] = useState('')
  const [token, setToken] = useState('')
  const Router = useRouter()
  useEffect(() => {
    const storedToken: any = localStorage.getItem('Usertoken')

    setToken(storedToken)
  }, [])

  const handleSendOtp = () => {
    console.log(otp, 'ooodsodosoppp')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios
      .post('https://veo.api.almerajgroups.com/api/coaches/verify-otp', {
        otp: otp
      })
      .then((response: any) => {
        toast.success('success verify otp')
        console.log(response)
        Router.push('/checkout')
      })
      .catch((error: any) => {
        if (error.response.status === 404) {
          toast.error(error.response.data.message)
          setOtp('')
        }
      })
  }
  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputStyle={{
          padding: '10px',
          border: 'none',
          outline: 'none',
          width: '65px',
          height: '52px',
          marginLeft: '8px',
          borderRadius: '4px',
          backgroundColor: '#ebf0f5'
        }}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button
        style={{
          backgroundImage:
            'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)',
          marginTop: '45px'
        }}
        type="submit"
        onClick={handleSendOtp}
      >
        Verify
      </Button>
    </>
  )
}

// backgroundColor:"#ebf0f5",
//         border: "none",
//         height:" 12px",
//         color:" gray",
//         font-size: medium;
//         border-radius: 8px;
//         margin-top: 5px;
//         margin-left: 2px;
//         outline: none;
//         display: block;
//         width: 100%;
//         padding: 10px;
