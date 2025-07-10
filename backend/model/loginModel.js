require('dotenv').config();
const mongoose = require('mongoose');

const connectDB= async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected now");
    }catch(err){
        console.log(err);
    }
}

module.exports ={
    connectDB
}