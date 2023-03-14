import { SearchOutlined, AttachFile, MoreVert } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./Chat.css"

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import axios from "./axios"

function Chat({ messages }) {

  // state
  const [input, setInput] = useState("");

  // preventDefault will prevent the app from refreshing when we hit Enter to send a new message
  const sendMessage = async (event) => {
    event.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Nhi Le", // if we have Google sign-in authentication, we can use the name from Google here instead of hard-coding
      timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      received: false
    });

    setInput("");
  };

  return (
    <div className="chat">

        <div className="chat__header">
          
          <Avatar/>

          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>last seen at...</p>
          </div>

          <div className="chat_headerRight">
            <IconButton><SearchOutlined/></IconButton>
            <IconButton><AttachFile/></IconButton>
            <IconButton><MoreVert/></IconButton>
          </div>
        </div>

        <div className="chat__body">

          {/* for every new message, map it to a <p> tag  */}
          {messages.map((message) => (
          
          <p className={`chat__message ${message.received && "chat__receiver"}`}>          
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>

          ))}

        </div>

        <div className="chat__footer">
          
          <InsertEmoticonIcon/>
          
          {/* note: using a form for the message box (unlike sidebar's search which uses input) */}
          <form>
            <input
              value = {input} onChange={event => setInput(event.target.value)}
              placeholder="Type a message"
              type="text"
            />
            {/* onclick, trigger sendMessage function */}
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
          </form>
          
          <MicIcon/>
        </div>
        </div>
  )
}

export default Chat