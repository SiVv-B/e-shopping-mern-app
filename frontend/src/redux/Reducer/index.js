import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import CartReducer from "./CartReducer"
import ProductReducer from './ProductReducer'


import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  UserReducer: UserReducer,
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,

})
export default rootReducer
