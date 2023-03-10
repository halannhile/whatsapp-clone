// IMPORTING 
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";

// APP CONFIG: create app instance in order to write api routes
const app = express()
const port = process.env.PORT || 9000 // the port where app will run 

// MIDDLEWARE: 
app.use(express.json)

// DATABASE CONFIG (MongoDB)

// cluster connection code: mongodb+srv://admin:<password>@cluster0.hkh6s1a.mongodb.net/?retryWrites=true&w=majority
// version with <dbname> field: // cluster connection code: mongodb+srv://admin:<password>@cluster0.hkh6s1a.mongodb.net/<dbname>?retryWrites=true&w=majority

// note: if some options are deprecated (e.g. useCreateIndex, useFindAndModify) in the new version of mongoose, simply remove them

const connection_url = 'mongodb+srv://admin:sgbBbNSZ1J8JNGJk@cluster0.hkh6s1a.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ???

// API ROUTES:  
app.get("/",(req,res)=>res.status(200).send('hello world'))

// API route to post new message to MongoDB:

/* 
this approach no longer works, received error "throw new MongooseError('Model.create() no longer accepts a callback');"

explanation: 
The error message "throw new MongooseError('Model.create() no longer accepts a callback');" indicates that you are using an outdated syntax for the create() method in Mongoose.
Prior to version 6, the create() method accepted a callback function as the last argument to handle errors and the created document. However, in version 6, the callback function was removed and the create() method now returns a Promise.

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body
    // use mongoose to create a new message using the data we sent in the body: 
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            // internal server error code
            res.status(500).send(err)
        } else {
            // 201 means created OK. return messages sent to our database
            res.status(201).send(data)
        }
    }) 
})
*/


// new approach: use .then() and .catch() to handle the Promise returned by create():
  app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage)
      .then((createdMessage) => {
        res.status(201).send(createdMessage);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  

// LISTENER
app.listen(port,()=>console.log(`Listening on localhost:${port}`))
