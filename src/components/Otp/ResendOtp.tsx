import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input'
import { Button } from '../twin'
import axios from 'axios'
import { toast } from 'react-toastify'
import LoaderIcon from '../icon/LoaderIcon'
// import { useRouter } from 'next/router'
toast
export default function ResendOtp() {
  const [otp, setOtp] = useState('')
  const [verify, setVerify] = useState(false)
  const [user, setUser] = useState<any>()
  useEffect(() => {
    const storedToken: any = localStorage.getItem('userData')
    let obj = JSON.parse(storedToken)
    setUser(obj)
  }, [])

  const handleSendOtp = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user?.token}`
    if (user?.token) {
      setVerify(true)
      axios
        .post('https://veo.api.almerajgroups.com/api/coaches/verify-otp', {
          otp,
          email: user.coach.email
        })
        .then((response: any) => {
          toast.success('success verify otp')
          setVerify(false)
          console.log(response)
        })
        .catch((error: any) => {
          if (error.response.status === 404) {
            toast.error(error.response.data.message)
            setOtp('')
          }
          setVerify(false)
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
