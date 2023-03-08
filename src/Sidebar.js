import React from 'react'
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
// import myImage from './assets/my-image.png';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src="./assets/my-image.png"/>
          
          <div className="sidebar__headerRight">         

            <IconButton> 
              <DonutLargeIcon/>
            </IconButton>
            
            <IconButton> 
              <ChatIcon/>
            </IconButton>
            
            <IconButton> 
              <MoreVertIcon/>
            </IconButton>

          </div>
        </div>
    </div>
  )
}

export default Sidebar