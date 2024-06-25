import mongoose from 'mongoose'
import dotenv from 'dotenv'
//import { Connection } from "./models/Admin.js";
dotenv.config()

const Connection = async() =>{
    try{
        mongoose.connect(process.env.URL)
        console.log("Connected")
    }catch(err){
        console.log("Error: "+err )
    }
    
}
Connection()