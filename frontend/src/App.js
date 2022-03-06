import React from 'react'
import { render } from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import ProductList from './components/ProductList'
import Cart from './pages/Cart'
import Home from "./pages/Home"
import Login from './pages/Login'
import Product from './pages/Product'
import Register from './pages/Register'

const App = () => {
  const user = true

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={user ? <Navigate to ='/'/> : <Login/>} />

            <Route path="/register" element={user ? <Navigate to ='/'/> : <Register/>} />        
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App