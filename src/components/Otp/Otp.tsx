import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { Button } from '../twin'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import LoaderIcon from '../icon/LoaderIcon'
export default function OTP({ loade }: { loade: boolean }) {
  const [otp, setOtp] = useState('')
  const [token, setToken] = useState<any>()
  const [verify, setVerify] = useState(false)
  const Router = useRouter()
  const user = useSelector((state: any) => state.userData)
  useEffect(() => {
    const storedToken: any = localStorage.getItem('userData')
    let obj = JSON.parse(storedToken)

    setToken(obj)
  }, [user, loade])

  const handleSendOtp = () => {
    if (otp) {
      setVerify(true)

      axios.defaults.headers.common['Authorization'] = `Bearer ${token.token}`
      axios
        .post('https://veo.api.almerajgroups.com/api/coaches/verify-otp', {
          otp: otp
        })
        .then((response: any) => {
          toast.success('success verify otp')
          console.log(response)
          setVerify(false)
          const newUpdatedUserInfo = {
            ...token,
            is_verified: true
          }

          localStorage.setItem('userData', JSON.stringify(newUpdatedUserInfo))
          Router.push('/checkout')
        })
        .catch((error: any) => {
          if (error.response.status === 404) {
            toast.error(error.response.data.message)
            setVerify(false)
            setOtp('')
          }
        })
    }
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
        {verify ? <LoaderIcon /> : 'Verify'}
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
