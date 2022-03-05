import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'
import Products from './Products'
import mobile from '../responsive'


const Container= styled.div`
`
const Title= styled.h1`
margin: 20px;
`
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;

`
const Filter= styled.div`
margin: 20px;
${mobile({ width:"0px 20px", display :'flex', flexDirection:"column"})}
`
const FilterText = styled.span`
font-size:20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight:"0px"})}

`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px "})}
`
const Option= styled.option`

`



function ProductList() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter products</FilterText>
        <Select>
          <Option disabled selected>
          Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select>
          <Option disabled selected>
          Size
          </Option>
          <Option>Xs</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort products</FilterText>
        <Select>
          <Option selected>
          Newst
          </Option>
          <Option>Price (asc)</Option>
          <Option>Price (desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList