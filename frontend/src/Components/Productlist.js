import React, { useEffect, useReducer } from "react"
//import Data from "../products"
import axios from "axios"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Product from "./Product"
import { Helmet } from "react-helmet-async"

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false }
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const Productlist = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
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
        const result = await axios.get("/api/products")
        dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message })
      }
      // setProducts(result.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <main>
        <Helmet>
          <title>E-Cat Mind</title>
        </Helmet>
        <h1>Application Best Low budget Products</h1>
        <div className='products'>
          {loading ? (
            <div>Products are Loading....</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={1} lg={3} className='mb-3'>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </main>
    </div>
  )
}
export default Productlist
