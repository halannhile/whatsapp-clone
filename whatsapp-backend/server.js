// importing 
import express from 'express'

// app config: create app instance in order to write api routes
const app = express()
const port = process.env.PORT || 9000 // the port where app will run 

// middleware 

// database config (MongoDB)

// ???

// api routes 
app.get('/',(req,res)=>res.status(200).send('hello world'))

// listener
app.listen(port,()=>console.log(`Listening on localhost:${port}`))
