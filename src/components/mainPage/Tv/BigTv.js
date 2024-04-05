import InnerImage from './InnerImage';
import './BigTv.css';

const BigTv=(props)=> {
  
  return (
    <div className="bigTvConatiner">
      <img alt="" className="bigTvOuter" src="/images/mainPage/bigTv.png" />
        <InnerImage tvSize="big" {...props} />
    </div>
  );
}

export default BigTv;
