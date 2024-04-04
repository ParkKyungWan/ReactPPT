import InnerImage from './InnerImage';
import './MiniTv.css';

const MiniTv=()=> {
  return (
    <div className="miniTvConatiner">
      <InnerImage/>
      <img src="/images/mainPage/miniTv.png" className="miniTvImg"/>
      <img src="/images/mainPage/remote.png" className="remoteController"/>
    </div>
  );
}

export default MiniTv;
