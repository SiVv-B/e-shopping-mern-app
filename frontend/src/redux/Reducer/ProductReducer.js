import {
  CREATE_PRODUCT,
  GET_PRODUCT,
  GET_ALL_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../Actions/ActionTypes'
const initialState = {
  products: [],
  product: null,
  updatedproduct: null,
  message: ' hello',
  loading: true,
  isAuth: false,
}
const ProductReducer = (state = initialState, action) => {  
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload.newProduct,
      }
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload }
    case UPDATE_PRODUCT:
      return { ...state, product: action.payload }
    case GET_PRODUCT:
      console.log("hello from reducer",action.payload)
      return {
        ...state,
        products: action.payload,
        message: 'get one product works',
      }
    case DELETE_PRODUCT:
      return { ...state, product: action.payload }
    default:
      return state
  }
}
export default ProductReducer
