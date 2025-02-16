import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/home'
import Nav from "./components/nav/nav"  
import Footer from "./components/footer/footer"
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
