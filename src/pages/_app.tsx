import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import { wrapper } from '@/services/store/store'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from '@/pages/GlobalStyles'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    // Check if user info exists in local storage
    const userInfo: any = localStorage.getItem('userData')
    let obj = JSON.parse(userInfo)
    if (obj?.is_verified === true) {
      if (obj?.is_verified === true && obj?.is_subscribed === true) {
        router.push('/signin')
      } else {
        router.push('/')
      }
    } else {
      router.push('/')
    }
  }, [])
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default wrapper.withRedux(App)
