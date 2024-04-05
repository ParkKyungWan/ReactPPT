import BigTv from './Tv/BigTv';
import MiniTv from './Tv/MiniTv';
import ChatView from './ChatView/ChatView';
import './MainPage.css';

import { useState } from 'react';


const MainPage = () => {

  const [tvSize, setTvSize] = useState("small");

  const switchTv = () => {
    setTvSize( (tvSize==="small" ? "big" : "small") )
  }
  const tvSizeNavigator = () =>{
    if( tvSize === "small" ){
      return <MiniTv switchTv={switchTv} />
    }else if ( tvSize === "big" ){
      return <BigTv switchTv={switchTv} />
    }
  }
  return (
    <div className="BackgroundContainer">
        { tvSizeNavigator() }
        <ChatView/>
    </div>
  );
}

export default MainPage;
