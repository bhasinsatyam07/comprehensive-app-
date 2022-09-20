import React, { useContext, useEffect, useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Rating from "./Rating"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import { Helmet } from "react-helmet-async"
import { Store } from "../Store"

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false }
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const Productscreens = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { slug } = params
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  })
  // const [products, setProducts] = useState([])

  useEffect(() => {
    //getall data from backend fetapi
    //ajex request
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" })
      try {
        const result = await axios.get(`/api/product/slug/${slug}`)
        dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message })
      }
    }
    fetchData()
  }, [slug])

  const { state, dispatch: cxtDispatch } = useContext(Store)
  const { cart } = state
  const addtocardhandler = async () => {
    //current product is available in cart or not
    const existItem = cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert("sorry. product is out of stock")
      return
    }

    cxtDispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } })
    navigate("/cart")
  }
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className='img-large'
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price :${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description :<p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg='success'>In Stock</Badge>
                      ) : (
                        <Badge bg='danger'>Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className='d-grid'>
                      <Button onClick={addtocardhandler} variant='primary'>
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Productscreens
