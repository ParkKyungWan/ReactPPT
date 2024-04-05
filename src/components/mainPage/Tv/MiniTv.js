import InnerImage from './InnerImage';
import './MiniTv.css';

const MiniTv=(props)=> {
  return (
    <div className="miniTvConatiner">
      <InnerImage tvSize="small" />
      <img src="/images/mainPage/miniTv.png" className="miniTvImg"/>
      <img 
        src="/images/mainPage/remote.png" 
        className="remoteController"
        onClick={ ()=> {props.switchTv()} }
      />
    </div>
  );
}

export default MiniTv;
