import React from "react";
import RightFeedComponent from "./RightFeedComponent";

function RightBar(props){
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid black",
    height: "350px",
    width: "225px"
  }
  return(
    <div style= {style}>RightBar
      <RightFeedComponent/>
      <RightFeedComponent/>
      <RightFeedComponent/>
    </div>
  )
}

export default RightBar;
