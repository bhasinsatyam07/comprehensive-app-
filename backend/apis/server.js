import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"
import orderRoute from "./routes/order.js"
import cartRoute from "./routes/cart.js"
import authRoute from "./routes/auth.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

mongoose
  .connect(process.env.MONGOGB)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => {
    console.log(err)
  })

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute)
app.use("/api/cart", cartRoute)

app.listen(PORT, () => {
  console.log(`Backend server is running on port http://localhost:${PORT}`)
})
