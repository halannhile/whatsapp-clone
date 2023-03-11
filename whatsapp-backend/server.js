// 1. IMPORTING 
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";
import Pusher from 'pusher';

// 2. APP CONFIG: create app instance in order to write api routes
const app = express()
const port = process.env.PORT || 9000 // the port where app will run 

const pusher = new Pusher({
    appId: "1566223",
    key: "1ad03e4393f2972f76ba",
    secret: "da0f47aafb8781fa7676",
    cluster: "ap4",
    useTLS: true
  });

// 3. MIDDLEWARE: 
app.use(express.json());

// 4. DATABASE CONFIG (MongoDB):
const connection_url = 'mongodb+srv://admin:sgbBbNSZ1J8JNGJk@cluster0.hkh6s1a.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 5. CHANGE STREAM: gonna listen to our database and if there's a change, it will trigger pusher
const db = mongoose.connection

db.once('open',()=>{
    console.log('DB is connected');
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change)=>{
        console.log("a change occured",change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        }
    });
});



// 6. API ROUTES:  
app.get("/",(req,res)=>res.status(200).send('hello world'))

// 6.1. API route to post new message to MongoDB:
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

// 6.2. API route to return messages from MongoDB: 
app.get("/messages/sync", (req, res) => {
    const dbMessage = req.body;
    Messages.find(dbMessage)
      .then((storedMessage) => {
        res.status(200).send(storedMessage);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

// LISTENER
app.listen(port,()=>console.log(`Listening on localhost:${port}`))


