import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Products = ({ cat, filters, sort }) => {
  //fetch data  (1. create ustate and define products
  //             2. use useEffect, then when you use filtredPRoduct it will display popularProducts.map
  //)
  const [products, setProducts] = useState([])
  const [filtredProducts, setFiltredProducts] = useState([])

  //when the cat changes, run useEffect:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`,
        )
        setProducts(res.data)
      } catch (error) {}
    }
    //call the function
    getProducts()
  }, [cat])

  //set filter products
  useEffect(() => {
     // if there is a category then filtredProducts by using a filter method
    //take each item and check whether they include filters or not
    //for that we take each filter and look each key (example color,size) and value (ex yellow, XL) 
    //once that done, we match them with the products items.if the itemps include the filters they will be displayed
    cat &&
    setFiltredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      )
  }, [cat, filters, products])
  return (
    <Container>
      {/* it was popularProducts (an example of data) and now it's filtredProducts(data from API) */}
      {filtredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
