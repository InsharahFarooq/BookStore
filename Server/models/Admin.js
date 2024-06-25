import mongoose from "mongoose";
//import myMongoose from './db.js';
const adminSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const adminModel = mongoose.model('Admin', adminSchema)
export {adminModel as Admin}
export const Connection = async () => {
    try {
        mongoose.connect(process.env.URL);
        console.log("Connected");
    } catch (err) {
        console.log("Error: " + err);
    }
};
