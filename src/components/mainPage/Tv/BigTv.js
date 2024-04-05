import InnerImage from './InnerImage';
import './BigTv.css';

const BigTv=()=> {
  return (
    <div className="bigTvConatiner">
      <img className="bigTvOuter" src="/images/mainPage/bigTv.png" />
        <InnerImage tvSize="big" />
    </div>
  );
}

export default BigTv;
