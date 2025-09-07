import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://root:Engi924+@food.k1jhxr1.mongodb.net/food').then(()=>{
        console.log("DB Connected")
    })
}