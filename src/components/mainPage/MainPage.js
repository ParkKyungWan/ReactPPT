import BigTv from './Tv/BigTv';
import MiniTv from './Tv/MiniTv';
import ChatView from './ChatView/ChatView';
import './MainPage.css';

import { useState } from 'react';


const MainPage = () => {

  /* big: 큰화면, small: 작은화면 */
  const [tvSize, setTvSize] = useState("small");

  /* ppt 슬라이드 총 개수와, 시작 슬라이드 설정 */
  const [slide, setSlide] = useState(1);
  const [total, setTotal] = useState(32);

  /* MiniTv, BigTv 에서 서로 교차할때 쓰는 함수, props로 제공됨 */
  const switchTv = () => {
    setTvSize( (tvSize==="small" ? "big" : "small") )
  }
  
  const nextSlide = () => {
    setSlide( (slide >= total) ? 1 : slide + 1 )
  }
  const previousSlide = () => {
    setSlide( (slide <= 1 || slide > total ) ? total : slide - 1 )
  }


  return (
    <div className="BackgroundContainer">
        <div className='BackgroundFlex'>
          {
            {
              "big": <BigTv switchTv={switchTv} slide={slide} total={total} />,
              "small": <MiniTv switchTv={switchTv} slide={slide} total={total} setSlide={setSlide} />
            }[tvSize]
          }
          <ChatView tvSize={tvSize} switchTv={switchTv} nextSlide={nextSlide} previousSlide={previousSlide} />
        </div>
    </div>
  );
}

export default MainPage;
