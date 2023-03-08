import { SearchOutlined, AttachFile, MoreVert } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Chat.css"

function Chat() {
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
          
          {/* this is the other person's message */}
          <p className="chat__message">          
            {/* the message */}
            <span className="chat__name">cubo</span>
            This is a message
            {/* message timestamp */}
            <span className="chat__timestamp">
              {new Date().toUTCString()}
            </span>
          </p>

          {/* this is your message */}
          {/* note: we're keeping the styling of the original message, but adding additional stylings for receiver's message */}
          <p className="chat__message chat__receiver">          
            {/* the message */}
            <span className="chat__name">cubo</span>
            This is a message
            {/* message timestamp */}
            <span className="chat__timestamp">
              {new Date().toUTCString()}
            </span>
          </p>



        </div>

    </div>
  )
}

export default Chat