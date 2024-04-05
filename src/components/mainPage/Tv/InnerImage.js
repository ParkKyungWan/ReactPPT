
const InnerImage=(props)=> {

  return (
    {
      "big" : <div className="InnerImageContainerBig" >
                <img src="/images/mainPage/samplePPT.png" className= "samplePPTImgBig" />
                <div className="old-tv-big" style={{ backgroundImage: "/images/mainPage/noise.png"}} />
              </div> ,
      "small" : <div className="InnerImageContainer">
                  <img src="/images/mainPage/samplePPT.png" className="samplePPTImg"/>
                  <div className="old-tv" style={{ backgroundImage: "/images/mainPage/noise.png"}} />
                </div>  
    }[props.tvSize]
  );
}

export default InnerImage;
