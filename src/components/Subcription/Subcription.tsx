import React, { useState, useEffect, useMemo } from 'react'

import TickIcon from '../icon/TickIcon'
import { Button } from '@/components/twin'

import StoragePlanDropdown from '@/components/Dropdown/StoragePlanDropdown'
import CoachRangeDropdown from '../Dropdown/CoachRangeDropdown'
import SubcriptionDropdown from '@/components/Dropdown/SubcriptionDropdown'
import axios from 'axios'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { Formik, Form, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
import { checkoutAmount } from '@/services/action/action'
import Loader from '../Loader/Loader'

const Subcription = () => {
  const [checkItem, setCheckItem] = useState<any>()
  const [loader, setLoder] = useState(true)
  const [coachRange, setCoachRange] = useState([])
  const [plan, setPlan] = useState([])
  const [storagePlan, setStoragePlan] = useState([])
  const [addons, setAddons] = useState([])
  const [storage, setStorage] = useState<any>()
  const [addSeclect, setAddSelected] = useState<any>([])
  const [subcript, setSubcription] = useState({
    title: 'Monthly Subscription',
    price: 140
  })
  const [coach, setCoach] = useState<any>()
  // const [club, setcClub] = useState()
  const [feature, setFeature] = useState<any>()
  const [addonsTotal, setAddonsTotal] = useState<any>()
  // const validationSchema = Yup.object().shape({
  //   coach_range: Yup.string(),
  //   storage: Yup.string().required('storage field is required')
  // })
  const dispatch = useDispatch()
  useEffect(() => {
    // const data = {
    //   storage_bandwidth: storage,
    //   addon_selected: addSeclect,
    //   subcription: subcript,
    //   coach_range: coach,
    //   club_name: club
    // }

    getUser()
  }, [])

  async function getUser() {
    try {
      const response = await axios.get(
        'https://veo.api.almerajgroups.com/api/plans'
      )
      if (response.data.status === 'success') {
        console.log(response.data)
        setPlan(response.data?.plans)
        setCoachRange(response.data?.coach_ranges)
        setStoragePlan(response.data?.storage_plans)
        setAddons(response.data?.addons)
        console.log(addSeclect)
        if (checkItem) {
          const featureFilter: any = response.data?.plans.find(
            (e: any) => e.title === checkItem.title
          )
          const newFilter = featureFilter.features
          setCheckItem(featureFilter)
          setFeature(JSON.parse(newFilter))
        } else {
          const featureFilter: any = response.data?.plans.find(
            (e: any) => e.title === 'Individual Coach'
          )
          const newFilter = featureFilter.features

          setCheckItem(featureFilter)

          setFeature(JSON.parse(newFilter))
        }

        setLoder(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  console.log(feature, 'myfeautrerererer')
  // const styleed =
  //   'bg-[#ebf0f5] border-none h-12 text-gray-500 placeholder:font-headingBook text-md w-full rounded-lg mt-5 focus:outline-none block  p-2.5 '

  const handleSelected = (item: any) => {
    const updatedData: any = addons.map((dataItem: any) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, selected: !dataItem.selected }
      }
      return dataItem
    })

    setAddons(updatedData)
    let totalPrice = 0
    updatedData.forEach((item: any) => {
      if (item.selected === true) {
        totalPrice += parseFloat(item.price)
      }
    })
    setAddonsTotal(totalPrice)
    setAddSelected(
      updatedData.filter((dataItem: any) => dataItem.selected === true)
    )
    // setFeature(true)
  }

  const handleFilterItem = (item: any) => {
    setCheckItem(item)
    const featureFilter: any = plan.find((e: any) => e.title === item?.title)
    const newFilter = featureFilter.features
    setFeature(JSON.parse(newFilter))
  }
  const totalPrice = useMemo(() => {
    let subscribing

    if (subcript.title === 'Yearly Subscription') {
      if (
        checkItem?.title === 'Individual Coach' ||
        checkItem?.title === 'Group/Club'
      ) {
        subscribing = checkItem?.yearly_price
      }
    } else if (subcript.title === 'Monthly Subscription') {
      if (
        checkItem?.title === 'Individual Coach' ||
        checkItem?.title === 'Group/Club'
      ) {
        subscribing = checkItem?.monthly_price
      }
    }

    const group = checkItem?.price
      ? (parseFloat(checkItem.price) + parseFloat(subscribing)).toFixed(2)
      : subscribing

    const store = storage?.price
      ? (parseFloat(storage.price) + parseFloat(group)).toFixed(2)
      : group

    const newPrice = coach?.price
      ? (parseFloat(coach.price) + parseFloat(store)).toFixed(2)
      : store

    const sum = addonsTotal
      ? (parseFloat(addonsTotal) + parseFloat(newPrice)).toFixed(2)
      : newPrice

    return sum
  }, [storage, coach, addonsTotal, subcript, checkItem])

  return (
    <>
      {loader === true && <Loader />}

      <div className="w-full">
        <Formik
          initialValues={{ coach_range: '', storage: '', group: false }}
          // validationSchema={validationSchema}
          onSubmit={() => {
            const data = {
              storage_bandwidth: storage,
              addon_selected: addSeclect,
              subcription: subcript,
              group: checkItem,
              coach_range: coach,
              totalPrice: totalPrice
            }
            dispatch(checkoutAmount(data))
            console.log(data, 'somethig')
            Router.push('/signup')
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center md:w-2/3 w-full  pb-5 overflow-y-auto ml-auto ">
                <div className="flex mt-10 font-headingBook text-[#2c5c92]">
                  <h1>Home</h1>
                  <div className=" border-r  h-5 mx-2 mt-1  border-black "></div>
                  <h1>How its work</h1>
                </div>
                <h1 className="text-5xl font-headingBold mt-6">Subcription</h1>
                <p className="my-5 text-3xl text-gray-600  font-headingBook">
                  Choose a Subcription Plan{' '}
                </p>
                <div className="flex  ">
                  {plan?.map((item: any) => {
                    return (
                      <>
                        <div className="flex items-center mx-2 justify-center">
                          <div
                            onClick={() => {
                              setCheckItem(item)
                            }}
                            className="bg-[#f7f7f7] shadow-2xl  w-5  mr-2 cursor-pointer rounded-full items-center justify-center flex  h-5 "
                          >
                            <input
                              type="radio"
                              checked={
                                item.title === checkItem?.title ? true : false
                              }
                              onChange={() => {
                                handleFilterItem(item)
                              }}
                              className="w-3  checked:border-[#00CCFB] border cursor-pointer h-3 p-0 border-[#00CCFB] rounded-full checked:bg-[#00CCFB] appearance-none   "
                              name="group"
                              id="group"
                            />
                          </div>
                          <h1 className="text-2xl  font-headingBold">
                            {item.title}
                          </h1>
                        </div>
                      </>
                    )
                  })}
                </div>
                <div className="md:w-2/5 w-3/5">
                  <SubcriptionDropdown setSubcription={setSubcription} />
                </div>
                <div className="flex md:w-1/2 w-full mx-10 md:mx-0 mt-8 text-[#2C5C92]">
                  <h1 className="text-4xl font-extrabold items-start ">
                    ${totalPrice ? parseFloat(totalPrice).toFixed(1) : 0}
                  </h1>
                  <p className="text-lg  flex justify-end font-headingBook items-end">
                    /
                    {subcript.title === 'Yearly Subscription'
                      ? 'yearly'
                      : 'month'}
                  </p>
                </div>
                {'Group/Club' === checkItem?.title && (
                  <div className="w-full items-center flex  flex-col justify-center">
                    <div className="md:w-2/5 w-3/5">
                      <CoachRangeDropdown
                        options={coachRange}
                        setFieldValue={setFieldValue}
                        setCoach={setCoach}
                      />
                      <ErrorMessage
                        name="coach_range"
                        component="div"
                        className="error text-red-500 "
                      />
                    </div>
                    {/* <div className="w-2/5 items-center flex justify-center">
            <input
              type="text"
              className={styleed}
              value={club}
              onChange={(e: any) => setcClub(e.target.value)}
              placeholder="Add Club Name"
            />
          </div> */}
                  </div>
                )}

                <div className="    mx-auto w-full flex justify-center  items-center my-5">
                  <div className="grid grid-cols-2 gap-5 gap-x-20 grid-rows-1 mx-10 md:mx-0 md:w-1/2 w-full ">
                    {feature &&
                      feature.map((review: any, reviewIndex: number) => {
                        return (
                          <div className="">
                            <div key={reviewIndex} className="flex ">
                              <TickIcon />
                              <h1 className="text-gray-500 text-xl font-headingBook ml-2">
                                {review}
                              </h1>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>

                {addons.map((item: any) => {
                  return (
                    <div
                      onClick={() => handleSelected(item)}
                      className={`${
                        item.selected
                          ? 'text-[#2C5C92] bg-[#F3F6F9] border-[#2C5C92] border-2'
                          : 'bg-[#f2f2f2] text-gray-500'
                      } w-1/2 cursor-pointer mt-5 p-5  h-auto rounded-md`}
                    >
                      <div className="flex justify-between ">
                        <h1 className="font-headingBook text-xl text-[#353535]">
                          {item.title}
                        </h1>
                        <h1 className="text-lg font-bold text-[#353535] ">
                          ${item.price}
                        </h1>
                      </div>
                      <div className="flex mt-2  justify-between font-headingBook">
                        <p>{item.feature}</p>
                      </div>
                    </div>
                  )
                })}

                <div className="md:w-2/5 w-3/5">
                  <StoragePlanDropdown
                    options={storagePlan}
                    setFieldValue={setFieldValue}
                    setStorage={setStorage}
                  />
                </div>
                {/* <ErrorMessage
                  name="storage"
                  component="div"
                  className="error text-red-500 "
                /> */}
                <Button
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #00FEDE, #00FDDF, #00CCFB)'
                  }}
                  type="submit"
                  className="my-16"
                >
                  Subscribe
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Subcription
