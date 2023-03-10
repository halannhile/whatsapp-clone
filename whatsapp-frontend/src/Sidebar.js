import React from 'react'
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

import { Avatar } from '@mui/material';
// import avatarIcon from '../assets/my_image.png';

import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
// import myImage from './assets/my-image.png';

function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebar__header">
          <Avatar src="../assets/my_image.png"/>
          {/* <Avatar src={avatarIcon}/> */}

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

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined/>
            <input placeholder="Search or start new chat" type="text"/>
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat roomName="Room A"/>
          <SidebarChat roomName="Room B"/>
          <SidebarChat roomName="Room C"/>
          <SidebarChat roomName="Room D"/>
        </div>


    </div>
  )
}

export default Sidebar