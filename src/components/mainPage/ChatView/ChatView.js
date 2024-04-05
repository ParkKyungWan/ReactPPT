import ChatItem from './ChatItem';
import './ChatView.css';

const ChatView=(props)=> {

  return (
    <div className="sideChatViewContainer">
      <div className="chatContainer">
        <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"/>
        <ChatItem chatColor="#00FFFF" userName="개구리링" userChat="ㅋㅋ난 잘 모르겠는데"/>
        <ChatItem chatColor="#FF69B4" userName="제갈공명" userChat="재밌네요~~^^"/>
        <ChatItem chatColor="#ADFF2F" userName="두꺼비" userChat="ㅎㅇㅎㅇ"/>
      </div>
      {
        {
          "big": 
            <div className="remoteIconsFlex">
                <div className="remoteIconBtn" onClick={()=>{props.switchTv();}}> <img className="remoteIcon" alt="" src="/images/mainPage/icons/tvoff.png"/> </div>
                <div className="remoteIconBtn" onClick={()=>{props.previousSlide();}}> <img className="remoteIcon" alt="" src="/images/mainPage/icons/left.png"/> </div>
                <div className="remoteIconBtn" onClick={()=>{props.nextSlide();}}> <img className="remoteIcon" alt="" src="/images/mainPage/icons/right.png"/> </div>
            </div>
          ,
          "small": <h2 className="chatHeading">담소방</h2>,
        }[props.tvSize]
      }
    </div>
  );
}

export default ChatView;
