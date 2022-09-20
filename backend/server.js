import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import seedRoute from "./routes/seedRoutes.js"
import productRoute from "./routes/productRoute.js"
dotenv.config()

const app = express()
app.use(cors())

app.use("/api/seed", seedRoute)

app.use("/api/products", productRoute)

//middlewares

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("My Mongo DB connected successfully"))
  .catch((err) => {
    console.log(err)
  })

app.listen(9002, () => {
  console.log(`backend server is running on http://localhost:${9002}`)
})
