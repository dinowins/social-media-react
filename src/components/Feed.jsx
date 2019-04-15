import React from "react";
import FeedComponent from "./FeedComponent";
import NavFeed from "./NavFeed";
import pic from "../assets/images/pic.jpg";

function Feed(){
  const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    // justifyContent: "space-around",

  }
  return(
    <div style={style}>
    <NavFeed/>
    <FeedComponent
      picture={pic}
      firstName = "Mark"
      lastName = "Zuckerberg"
      text = "Don't mess with the Zucc"/>
    <FeedComponent
      picture={pic}
      firstName = "Markus"
      lastName = "Zuckrelius"
      text="To Zucc or not to Zucc, that is the question"/>
    <FeedComponent
      picture={pic}
      firstName = "Markus"
      lastName = "Zuckrelius"
      text="To Zucc or not to Zucc, that is the question"/>
    </div>
  )
}

export default Feed
