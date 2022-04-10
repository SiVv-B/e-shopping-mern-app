const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require ("./Routes/UserRoute")
const authRoute = require ("./Routes/AuthRoute")
const productRoute = require("./Routes/ProductRoute")
const cartRoute = require("./Routes/CartRoute")
const orderRoute = require("./Routes/OrderRoute")
const stripeRoute = require("./Routes/StripeRoute")
const cors = require("cors")
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connected with success'))
  .catch((err) => {
    console.log(err)
  })


  app.use(express.json())
  
  //what cors will authorize to access to the requests once we are in frontend :D :
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));
  app.use('/api/user', userRoute)
  app.use('/api/auth', authRoute)
  app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.listen( process.env.PORT || 5000, () => {
  console.log('server is running on port 5000')
})
