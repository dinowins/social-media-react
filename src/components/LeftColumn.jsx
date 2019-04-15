import React from "react";
import ProfileCard from "./ProfileCard";
import Bio from "./Bio";


function LeftColumn (props) {
 const style = {
   display: "flex",
   flexDirection: "column"
 }
  return (
    <div style={style}>
      <ProfileCard/>
      <Bio/>
    </div>
  )
}


export default LeftColumn;
