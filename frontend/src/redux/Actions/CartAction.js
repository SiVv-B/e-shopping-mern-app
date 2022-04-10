import {
    CREATE_CART,
    GET_ALL_CARTS,
    UPDATE_CART,
    GET_CART,
    DELETE_CART,
  } from './ActionTypes'
  import axios from 'axios'

  export const createCart = (cart, navigate) => async (dispatch) => {
    try {
      console.log('from CartAction create', cart)
  
      const response = await axios.post('api/carts/', cart)
      console.log('register from cartAction cart:', cart)
      console.log('register from cartAction resonse:', response)
      dispatch({ type: CREATE_CART, payload: response })
      navigate('/')
    } catch (error) {
      console.log('error from cartAction create', error)
     
    }
  }
  
  export const deletecart = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`api/carts/${id}`)
      dispatch(getcarts())
    } catch (error) {
      console.log(error)
    }
  }
  
  export const updatecart = (id, cart) => async (dispatch) => {
    try {
      const response = await axios.put(`api/carts/${id}`, cart)
      console.log('from edit cart action', response.data.cart)
      dispatch({ type: UPDATE_CART, payload: response.data.cart })
      dispatch(getcarts())
    } catch (error) {
      console.log(error)
      
    }
  }
  

  export const getOnecart = (id) => async (dispatch) => {
  
    try {
      const response = await axios.get(`api/carts/find/${id}`)
      console.log('from cartAction get one cart from user ID ', response.data.cartFound)
      dispatch({ type: GET_CART, payload: response.data.cartFound })
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getcarts = () => async (dispatch) => {
    try {
      const response = await axios.get('api/carts')
      dispatch({ type: GET_ALL_CARTS, payload: response.data.carts })
    
      console.log(response)
    
    } catch (error) {
      console.log(error)
    }
  }