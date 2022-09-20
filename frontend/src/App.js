import React from "react"
import Productlist from "./Components/Productlist"
import Productscreens from "./Components/Productscreens"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Container from "react-bootstrap/Container"
import Header from "./Components/Header"
import CartScreen from "./Components/CartScreen"
import Signin from "./Components/Auth/Signin"

const App = () => {
  return (
    <Router>
      <Header />
      <Container className='mt-4'>
        <Routes>
          <Route exact path='/' element={<Productlist />} />
          <Route exact path='/cart' element={<CartScreen />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route path='/product/:slug' element={<Productscreens />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
