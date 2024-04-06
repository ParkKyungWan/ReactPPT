
import { useState } from 'react';
import './Popgi.css'

const Popgi=()=> {
    const [ isActive, setIsActive ] = useState(false);
    
    const switchPopgiState = () =>{
        console.log("hi")
        setIsActive( (prev)=>!prev );
    }
  return (
    <div className={ (isActive) ? "PopgiContainer-active": "PopgiContainer"} onClick={()=>{switchPopgiState()}}>
        <iframe className="Popgi-iframe" src="https://sciencej.cafe24.com/html5/select3/select3.html" />
    </div>
  );
}

export default Popgi;
