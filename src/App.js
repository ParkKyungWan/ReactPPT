import {React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './components/mainPage/MainPage';
import ChatPage from './components/chatPage/ChatPage';


import socket from "./server";
import {createNickName} from './utils/randomNick';
import {createColor} from './utils/randomColor';


function App() {
  
  /*채팅 구현을 위한 부분*/
  const [user,setUser] = useState(null);
  const [message,setMessage] = useState('');
  const [messageList,setMessageList] = useState([]);
  const [userColor,setUserColor] = useState("#FFFFFF");

  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessageList((prevState)=>prevState.concat(message));
    })
    setUserNickandColor();
  },[])

  const setUserNickandColor=()=>{
    const userName = createNickName();
    const userColor = createColor();
    socket.emit( "login", userName, userColor, (res)=>{
      if (res?.ok) { 
        setUser(userName);
        setUserColor(userColor);
      }
    });
  }
  
  const sendMessage = (event) => {
    event.preventDefault();
    setMessage('');
    socket.emit("sendMessage", message, (res)=>{
      console.log("sendMessage res",res);
    })
  }

  const chatProps = {
    'message' : message,
    'setMessage' : setMessage,
    'sendMessage' : sendMessage,
    'messageList' : messageList,
    'user': user,
    'userColor': userColor,
  }
  /*채팅 구현을 위한 부분 - 끝*/

  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainPage {...chatProps} />} />
          <Route path="/chatting" element={<ChatPage {...chatProps} />} />
        </Routes>
    </Router>
  );
}

export default App;
