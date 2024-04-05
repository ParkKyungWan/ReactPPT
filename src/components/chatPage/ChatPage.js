import { useState } from 'react';
import '../mainPage/ChatView/ChatView.css';
import './ChatPage.css'
import ChatItem from '../mainPage/ChatView/ChatItem';

const ChatPage = () => {


  return (
    <div className="chattingBackgroundContainer">
        <div className="chattingContainer">
            <div className="chatArray chatArrayCustom">
                <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"/>
                <ChatItem chatColor="#00FFFF" userName="개구리링" userChat="ㅋㅋ난 잘 모르겠는데"/>
                <ChatItem chatColor="#FF69B4" userName="제갈공명" userChat="재밌네요~~^^"/>
                <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅎㅇㅎㅇ"/>
            </div>
        </div>
        <div className="typingContainer">
            <input type="text" class="chat-input" placeholder="메시지를 입력하세요..."/>
            <button class="send-button">전송</button>
        </div>
    </div>
  );
}

export default ChatPage;
