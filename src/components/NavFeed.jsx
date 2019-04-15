import React from "react";


function NavFeed() {
  const style =  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "solid 1px blue",
    marginBottom:"30px",
    backgroundColor:"lightblue",
    height:"100px",

  }
  const square = {
    height: "50px",
    width: "50px",
    marginLeft: "5px",
    backgroundColor: "#871e13"
  }

  const input = {
    marginLeft: "40px",
    height: "30px",
    width: "300px",
    border: "1px blue solid",
    color: "blue"
  }

  return(
    <div style = {style} >
      <div style = {square}>
      </div>
      <input style = {input} placeholder = "What's happening?"></input>

    </div>
  )
}

export default NavFeed;
