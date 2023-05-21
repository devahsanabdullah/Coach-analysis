import SideApp from '@/components/SideApp/SideApp'
import Subcription from '@/components/Subcription/Subcription'
export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <SideApp />
        <Subcription />
      </div>
    </>
  )
}
