import express from "express"
import Product from "../models/Product.js"
import Data from "../products.js"
import User from "../models/User.js"

const seedRoute = express.Router()

seedRoute.get("/", async (req, res) => {
  await Product.deleteMany({})
  const createdProducts = await Product.insertMany(Data.products)

  await User.deleteMany({})
  const createdUsers = await User.insertMany(Data.users)

  res.send({ createdProducts, createdUsers })
})

export default seedRoute
