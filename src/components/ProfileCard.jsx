import React from "react";
import pic from "../assets/images/pic.jpg";


function ProfileCard () {
  const wordFlow = {
    border: "1px blue solid",
    height: "250px",
  }
  const bio = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

  }

  const blue = {
    height: "40%",
    width:"100%",
    backgroundColor: "lightblue"
  }

  const image = {
    width: "75px",
    height:"75px"
  }

  const row = {
    display: "flex",
    
  }

  return(
    <div style = {wordFlow}>
      <div style = {blue}>
      </div>
      <div style = {row}>
        <img src = {pic} style = {image}/>
        <h1>Jack Kruxicvnyu</h1>
      </div>
      <div style = {bio}>
        <p>TWEETS</p>
        <p>FOLLOWING</p>
        <p>FOLLOWERS</p>
      </div>
    </div>
  )
}

export default ProfileCard;
