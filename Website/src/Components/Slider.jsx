import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AAP from "../assets/AAP.jpg";
import AHN from "../assets/AHN.jpg"
import THH from "../assets/THH.jpg"
import PPP from "../assets/PPP.jpg"

function Slider() {
  return (

    <AwesomeSlider activityColor="red" bullets={true} style={{width:900, height:375}}>
      <div><img width={800} style={{resize:''}} height={300}  src={AAP} alt="" /></div>
      <div><img width={800}  src={AHN} alt="" /></div>
      <div><img width={800} src={THH} alt="" /></div>
      <div><img width={900}  src={PPP} alt="" /></div>
    </AwesomeSlider>
    

  );
}

export default Slider;
