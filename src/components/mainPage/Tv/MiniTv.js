import InnerImage from './InnerImage';
import './MiniTv.css';


const MiniTv=(props)=> {

  return (
    <div className="miniTvConatiner">

      <h3 className='howManyOnline'>접속자: 0명</h3>

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
