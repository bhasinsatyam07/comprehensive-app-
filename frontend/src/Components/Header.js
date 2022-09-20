import React, { useContext } from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"
import Nav from "react-bootstrap/Nav"
import Badge from "react-bootstrap/Badge"
import { Link } from "react-router-dom"
import { Store } from "../Store"

const Header = () => {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>E-Cart Mind</Navbar.Brand>
          </LinkContainer>
          <Nav className='me-auto'>
            <Link to='/cart' className='nav-link'>
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg='danger'>
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
