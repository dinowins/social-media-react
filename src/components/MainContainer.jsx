import React from "react";
import LeftColumn from "./LeftColumn";
import Feed from "./Feed";
import RightBar from "./RightBar";

function MainContainer(){
  const mainStyling = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  }
  return(
    <div style={mainStyling}>
      <LeftColumn/>
      <Feed/>
      <RightBar/>
    </div>
  )
}

export default MainContainer;
