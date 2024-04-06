import { useState } from 'react';
import '../mainPage/ChatView/ChatView.css';
import './ChatPage.css'
import ChatItem from '../mainPage/ChatView/ChatItem';

const ChatPage = (chatProps) => {

  
  return (
    <div className="chattingBackgroundContainer">
        <div className="chattingContainer">
            <div className="chatArray chatArrayCustom">
            {
              chatProps.messageList.map((message) => {
              return (
                //채팅 보여주기
                (message.user.name==="system")? "" :
                <ChatItem key={message._id} chatColor={message.user.color} userName={message.user.name} userChat={message.chat} old={message.old}/>

                );}) 
            }
            </div>
        </div>
        <form 
          name="chatPageForm"
          onSubmit={chatProps.sendMessage} 
          className="typingContainer"
        >
            <input 
              type="text" 
              name="chatMessage"
              className="chat-input" 
              placeholder="메시지를 입력하세요..."
              value={chatProps.message} 
              onChange={(event) => chatProps.setMessage(event.target.value)}
            />
            <button className="send-button" disabled={chatProps.message === ""}>전송</button>
        </form>
    </div>
  );
}

export default ChatPage;
