import ChatItem from './ChatItem';
import './ChatView.css';

const ChatView=(props)=> {

  return (
    <div className="sideChatViewContainer">
      <div className="chatContainer chatArray">
      {
              props.chatProps.messageList.map((message) => {
              return (
                //채팅 보여주기
                (message.user.name==="system")? "" :
                <ChatItem key={message._id} chatColor={message.user.color} userName={message.user.name} userChat={message.chat}/>
                

                );}) 
          }
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
