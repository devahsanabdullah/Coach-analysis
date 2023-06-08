// import {login} from '../action/Action'
// import {menudata} from '../../../constants/index'
// import {buyserCustomer} from '../../../hooks/usePostUser'

export type InitialProps = {
  checkout: any
  userData: any
  emailVerify: any
}

const initialState: InitialProps = {
  checkout: {} as any,
  userData: {} as any,
  emailVerify: {} as any
}

const rootReducer = (state: InitialProps = initialState, action: any) => {
  switch (action.type) {
    case 'SUBCRIBE_CHECKOUT':
      return {
        ...state,

        checkout: action.payload.checkout
      }
    case 'USER_DATA':
      return {
        ...state,

        userData: action.payload.userData
      }
    case 'EMAIL_VERIFY':
      return {
        ...state,

        emailVerify: action.payload.emailVerify
      }
    case 'BUYER_DATA':
      return {
        ...state,

        buyerData: action.payload.buyerData
      }
    case 'TOTAL_AMOUNT':
      return {
        ...state,

        totalAmount: action.payload.totalAmount
      }

    default:
      return state
  }
}
export default rootReducer
