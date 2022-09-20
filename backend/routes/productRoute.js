import express from "express"
import Product from "../models/Product.js"

const productRoute = express.Router()

productRoute.get("/", async (req, res) => {
  const products = await Product.find()
  res.send(products)
})

productRoute.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: { $eq: req.params.slug } })
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: "Product Not Found" })
  }
})
productRoute.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: "Product Not Found" })
  }
})

export default productRoute
