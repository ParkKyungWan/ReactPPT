const ChatItem=(props)=> {
  return (
    <div className={(props.old)? "chatItem chatItem-old" : "chatItem"}>
        <span id="userName" style={{color: props.chatColor }}> {props.userName}</span>:
        <span id="userChat"> {props.userChat}</span>
    </div>
  );
}

export default ChatItem;
