// import { BsTypeH3 } from "react-icons/bs";
// import { Dispatch } from "redux";
// import { TypeOf } from "yup";
// import {menudata} from '../../../constants/index'
// import {buyserCustomer} from '../../../hooks/usePostUser'

// export const login = 'SIGN_IN'

// type propstypes = {
//   type: string
//   payload: string[]
// }

// export const drawerOpen = (open: boolean, sales: any) => {
//   return {
//     type: 'DARWER_OPEN',
//     payload: {
//       menu: sales,
//       openDawer: open
//     }
//   }
// }
// export const changeItem = (prop: boolean) => {
//   return {
//     type: 'CHANGE_ITEM',
//     payload: {
//       change: prop
//     }
//   }
// }
// export const buyerData = (prop: any) => {
//   return {
//     type: 'BUYER_DATA',
//     payload: {
//       buyerData: prop
//     }
//   }
// }
export const checkoutAmount = (prop: any) => {
  return {
    type: 'SUBCRIBE_CHECKOUT',
    payload: {
      checkout: prop
    }
  }
}

export const setuserData = (prop: any) => {
  return {
    type: 'USER_DATA',
    payload: {
      userData: prop
    }
  }
}
export const setEmailVerify = (prop: any) => {
  return {
    type: 'EMAIL_VERIFY',
    payload: {
      emailVerify: prop
    }
  }
}
