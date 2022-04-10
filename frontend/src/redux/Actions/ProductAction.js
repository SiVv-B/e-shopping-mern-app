import {
    CREATE_PRODUCT,
    GET_PRODUCT,
    GET_ALL_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from './ActionTypes'
  import axios from 'axios'

  export const createproduct = (product, navigate) => async (dispatch) => {
    try {
      console.log('from productAction create', product)
  
      const response = await axios.post('api/products/', product)
      console.log('register from productAction product:', product)
      console.log('register from productAction resonse:', response)
      dispatch({ type: CREATE_PRODUCT, payload: response })
      navigate('/')
    } catch (error) {
      console.log('error from productAction create', error)
     
    }
  }
  
  export const deleteproduct = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`api/products/${id}`)
      dispatch(getproducts())
    } catch (error) {
      console.log(error)
    }
  }
  
  export const updateproduct = (id, product) => async (dispatch) => {
    try {
      const response = await axios.put(`api/products/${id}`, product)
      console.log('from edit product action', response.data.product)
      dispatch({ type: UPDATE_PRODUCT, payload: response.data.product })
      dispatch(getproducts())
    } catch (error) {
      console.log(error)
      
    }
  }
  

  export const getOneproduct = (id) => async (dispatch) => {
  
    try {
      const response = await axios.get(`/api/products/find/${id}`)
      dispatch({ type:  GET_PRODUCT, payload: response.data })
      console.log('from productAction get one product  ', response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getproducts = (cat) => async (dispatch) => {
    try {
      const response = await axios.get(`/api/products?category=${cat}`)
      dispatch({ type: GET_ALL_PRODUCTS, payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }