import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

 

//app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();// from the db.js file 

//appi endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
  res.send("Run Successfully");
})

app.listen(port,()=>{
  console.log(`Server run on port: http://localhost:${port}`)
})

