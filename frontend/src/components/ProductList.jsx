import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'
import Products from './Products'
import mobile from '../responsive'
import { useLocation } from 'react-router'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px ' })}
`
const Option = styled.option``

function ProductList() {
  const location = useLocation()
  //split the path split with / and take the second element
  console.log('location:', location.pathname.split('/')[2])
  const cat = location.pathname.split('/')[2]

  const [filters, setFilter] = useState({})
  const [sort, setSort] = useState('newest')

  //when you filter a product, you create an object with cat
  const handleFilters = (e) => {
    const value = e.target.value
    setFilter({
      //this spread operator allow to select color and size at the same time
      ...filters,
      //this allows to reconize the selected cat
      [e.target.name]: value,
    })
  }


  const handleSort = (e) => {
    setSort(e.target.value)
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products</FilterText>
          <Select onChange={handleSort}>
            <Option value='newest'>Newst</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList
