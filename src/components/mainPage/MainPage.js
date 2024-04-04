import ChatView from './ChatView/ChatView';
import './MainPage.css';
import MiniTv from './MiniTv/MiniTv';

const MainPage=()=> {
  return (
    <div className="BackgroundContainer">
        <MiniTv/>
        <ChatView/>
    </div>
  );
}

export default MainPage;
