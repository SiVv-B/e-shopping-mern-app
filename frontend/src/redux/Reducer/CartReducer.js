import {
    CREATE_CART,
    GET_ALL_CARTS,
    UPDATE_CART,
    GET_CART,
    DELETE_CART,
  } from '../Actions/ActionTypes'
  const initialState = {
    products: [],
    product: null,
    updatedproduct: null,
    message: ' hello',
    loading: true,
    isAuth: false,
  }
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CART:
        return {
          ...state,
          product: action.payload.newproduct,
        }
      case GET_ALL_CARTS:
        return { ...state, products: action.payload }
      case UPDATE_CART:
        return { ...state, product: action.payload }
      case GET_CART:
        return {
          ...state,
          product: action.payload,
          message: 'get one product works',
        }
      case DELETE_CART:
        return { ...state, product: action.payload }
      default:
        return state
    }
  }
  export default CartReducer
  