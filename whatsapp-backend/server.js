// importing 
import express from 'express';
import mongoose from 'mongoose';

// app config: create app instance in order to write api routes
const app = express()
const port = process.env.PORT || 9000 // the port where app will run 

// middleware 

// database config (MongoDB)
// cluster connection code: mongodb+srv://admin:<password>@cluster0.hkh6s1a.mongodb.net/?retryWrites=true&w=majority
// version with <dbname> field: // cluster connection code: mongodb+srv://admin:<password>@cluster0.hkh6s1a.mongodb.net/<dbname>?retryWrites=true&w=majority

const connection_url = 'mongodb+srv://admin:sgbBbNSZ1J8JNGJk@cluster0.hkh6s1a.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ???

// api routes 
app.get("/",(req,res)=>res.status(200).send('hello world'))

// listener
app.listen(port,()=>console.log(`Listening on localhost:${port}`))
