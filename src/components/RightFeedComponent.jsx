import React from "react";
import pic from "../assets/images/pic.jpg";

function RightFeedComponent(prop){
  const style = {
    display:"flex",
    justifyContent: "space-around",
    flexDirection: "row",
    // border: "1px solid red",
    // height: "50px"

  }
  const buttonStyle = {
    marginRight: "5px",
    backgroundColor: "#7961ff",
    color: "white",
    height:"30px",
    width: "75px"
  }

  const image = {
    width: "75px",
    height:"75px"
  }

  const column = {
    display: "flex",
    flexDirection: "column",

  }
return(
<div style = {style}>
  <img src = {pic} style = {image}/>
    <div style = { column}>
      <p> Trust Zuck</p>
      <button style = {buttonStyle}>button</button>
    </div>
</div>
)
}

export default RightFeedComponent;
