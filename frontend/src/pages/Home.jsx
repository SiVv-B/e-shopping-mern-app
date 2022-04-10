import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer  from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

function Home() {

  return (
    <div>
      
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home