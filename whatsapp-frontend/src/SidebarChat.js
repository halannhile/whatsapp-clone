import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
        
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>{props.roomName}</h2>
            <p>This is the last message</p>
        </div>
    
    </div>  
  )
}

export default SidebarChat