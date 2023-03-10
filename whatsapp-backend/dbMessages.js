import mongoose from "mongoose";

// DEFINE DATA SCHEMA: 
const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// setting up the collection: 
export default mongoose.model(
    'messageContent', whatsappSchema
)