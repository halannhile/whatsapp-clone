import mongoose from "mongoose";

// DEFINE DATA SCHEMA: 
const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
})