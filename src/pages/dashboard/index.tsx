// import { useRouter } from 'next/router';
// import {useEffect} from 'react';
import VideoIcon from '@/components/icon/VideoIcon'
import Image from 'next/image'
const Dashboard = () => {
  //   const router = useRouter();

  const navbar = [
    {
      url: '/images/menu.png',
      title: 'Dashboard'
    },
    {
      url: '/images/login.png',
      title: 'Manages Teams'
    },
    {
      url: '/images/login.png',
      title: 'Manage Players'
    },
    {
      url: '/images/menu.png',
      title: 'Manage Categories'
    },
    {
      url: '/images/login.png',
      title: 'Manage Games'
    },
    {
      url: '/images/video.png',
      title: 'Manage videos'
    },
    {
      url: '/images/analytics.png',
      title: 'Manage Sports'
    },
    {
      url: '/images/menu.png',
      title: 'View Reports'
    },
    {
      url: '/images/play.png',
      title: 'Manage Highlights'
    },
    {
      url: '/images/menu.png',
      title: 'Manage Profile'
    }
  ]
  return (
    <>
      {/* <div classNameName="relative bg-priamry p-10"  >	
        <div classNameName=" absolute bg-white"> some values here</div>
         
    </div> */}
      <div className="relative">
        <div className="bg-[#2C5C92]  h-2/5">
          <div className=" w-44 flex py-3 pl-10 flex-col justify-center items-center">
            <div className=" border-2 border-[#09e2d4] w-20 flex justify-center items-center py-2 rounded-full ">
              <h1 className="text-5xl w-16 py-2 flex justify-center items-center rounded-full text-[#b5c7d9] bg-white font-headingBold">
                R
              </h1>
            </div>
            <p className="text-white  font-headingBook text-xl">
              Richard Green
            </p>
            <p className="text-[#09e2d4] font-headingBook text-base">Coach</p>
            <p className="text-[#7695b8] font-headingBook">
              Individual subcription
            </p>
            <div className="flex space-x-2 ">
              <div className="flex space-x-1 justify-center items-center ">
                <VideoIcon />
                <div>
                  <p className="text-white font-bold">256</p>
                  <p className="text-white font-headingBook">videos</p>
                </div>
              </div>
              <div className="flex  space-x-1 justify-center items-center ">
                <VideoIcon />
                <div>
                  <p className="text-white font-bold ">64</p>
                  <p className="text-white font-headingBook">Games</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed  inset-x-0 flex justify-center items-center   top-20 z-10">
          <div className="shadow-lg bg-white w-8/12 rounded-2xl h-screen ">
            <h1>Navigation Bar</h1>
          </div>
        </div>

        <div className="relative z-0">
          <div className="pl-10  w-48">
            <div className="grid  gap-x-24 grid-cols-2">
              {navbar.map((item) => {
                return (
                  <div className="w-7 mt-8 flex justify-center items-center flex-col">
                    <Image src={item.url} alt="" width={40} height={40} />
                    <p className="mt-2 text-gray-500 font-headingBook">
                      {item.title}
                    </p>
                  </div>
                )
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
