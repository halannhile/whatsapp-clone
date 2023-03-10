import mongoose from "mongoose";

// DEFINE DATA SCHEMA: 
const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// setting up the collection: 
// note: messageContent or messagecontent is one thing, MongoDB cluster is NOT case-sensitive
export default mongoose.model(
    'messagecontents', whatsappSchema
)