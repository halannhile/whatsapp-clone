import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
// note: need to import axios from our local
import axios from './axios';

function App() {

  // state: initially empty array
  const [messages, setMessage] = useState([]);
  
  // fetching all the initial info:
  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessage(response.data)
    })
  }, [])

  // useEffect: when the app launches, run this once, an alert will pop up on the screen once a message is inserted to our app 
  // this is important because when we have a listener, we don't want to attach it several times
  useEffect(() => {
    const pusher = new Pusher('1ad03e4393f2972f76ba', {
      cluster: 'ap4'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  // console log when messages change: 
  console.log(messages);
  
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>        
        <Chat/>
      </div>
    </div>
  );
}

export default App;
