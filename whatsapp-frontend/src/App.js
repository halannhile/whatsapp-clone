import { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';

function App() {

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
