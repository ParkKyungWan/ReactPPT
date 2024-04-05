
const InnerImage=(props)=> {

  return (
    {
      "big" : <div className="InnerImageContainerBig" >
                <img alt="" src={ "/images/ppt/슬라이드"+props.slide+".png"} className= "PPTImgBig" />
                <div className="old-tv-big" style={{ backgroundImage: "/images/mainPage/noise.png"}} />
              </div> ,
      "small" : <div className="InnerImageContainer">
                  <img alt="" src={ "/images/ppt/슬라이드"+props.slide+".png"} className="PPTImg"/>
                  <div className="old-tv" style={{ backgroundImage: "/images/mainPage/noise.png"}} /> 
                </div>  
    }[props.tvSize]
  );
}

export default InnerImage;
