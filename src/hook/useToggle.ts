import { useState } from 'react'

export const usetoggleHook = (initialArray: any) => {
  const [array, setArray] = useState(initialArray)

  const toggleValue = (index: number, key: string) => {
    setArray((prevArray: any) => {
      const newArray = prevArray.map((item: any, i: number) => {
        return {
          ...item,
          [key]: i === index ? !item[key] : false
        }
      })
      return newArray
    })
  }

  return [array, toggleValue]
}
