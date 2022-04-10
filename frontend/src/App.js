import React from 'react'
import { getUser } from './redux/Actions/AuthAction'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/ProductPage'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
/*     const user = useSelector((state) => state.user.currentUser)
 */   
  const dispatch = useDispatch()
/*   useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getUser())
    }
  }, []) */
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          {/*      <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*<Route path="/login" element={user ? <Navigate to ='/'/> : <Login/>} />
            <Route path="/register" element={user ? <Navigate to ='/'/> : <Register/>} />

*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
