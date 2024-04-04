import ChatItem from './ChatItem';
import './ChatView.css';

const ChatView=()=> {
  return (
    <div className="sideChatViewContainer">
      <h1 className="chatHeading">채팅</h1>
      <div className="chatContainer">
        <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"/>
        <ChatItem chatColor="#00FFFF" userName="개구리링" userChat="ㅋㅋ난 잘 모르겠는데"/>
        <ChatItem chatColor="#FF69B4" userName="제갈공명" userChat="재밌네요~~^^"/>
        <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅎㅇㅎㅇ"/>
        </div>
    </div>
  );
}

export default ChatView;
