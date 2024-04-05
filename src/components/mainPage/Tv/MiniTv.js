import { useState } from 'react';
import InnerImage from './InnerImage';
import './MiniTv.css';


const MiniTv=(props)=> {

  return (
    <div className="miniTvConatiner">
      <InnerImage tvSize="small" {...props}/>
      <img alt="" src="/images/mainPage/miniTv.png" className="miniTvImg"/>
      <img 
        alt="" 
        src="/images/mainPage/phoneQR.png" 
        className="phoneQR"
        onClick={ ()=> { props.setSlide(9999) } }
      />
      <img 
        alt="" 
        src="/images/mainPage/remote.png" 
        className="remoteController"
        onClick={ ()=> {props.switchTv()} }
      />
    </div>
  );
}

export default MiniTv;
