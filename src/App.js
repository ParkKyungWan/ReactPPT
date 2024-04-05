import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './components/mainPage/MainPage';
import ChatPage from './components/chatPage/ChatPage';


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/chatting" element={<ChatPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
