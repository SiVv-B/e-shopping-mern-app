import {
  ADD_PODUCT,
  CREATE_CART,
  GET_ALL_CARTS,
  UPDATE_CART,
  GET_CART,
  DELETE_CART,
} from '../Actions/ActionTypes'
const initialState = {
  carts: [],
  cart: null,
  updatedcart: null,
  message: ' hello',
}
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state, cart: action.payload.newcart,
      }
    case GET_ALL_CARTS:
      return { ...state, carts: action.payload }
    case UPDATE_CART:
      return {
        ...state, carts: action.payload 
      }
    case GET_CART:
      return {
        ...state, cart: action.payload,
        message: 'get one cart works',
      }
    case DELETE_CART:
      return { ...state, cart: action.payload }
    default:
      return state
  }
}
export default CartReducer
