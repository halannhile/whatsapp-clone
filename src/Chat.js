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
          <p>This is a message</p>
        </div>

    </div>
  )
}

export default Chat