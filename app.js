import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import { listFood, removeFood } from "./controllers/foodController.js"

// app config
const app = express()

const PORT = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection

connectDB();

//Api Endpoints urls

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/food",listFood)
app.use("/api.food",removeFood)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})
