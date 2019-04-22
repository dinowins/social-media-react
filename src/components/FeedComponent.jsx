import React from "react";
import pic from "../assets/images/pic.jpg";
import PropTypes from "prop-types";
import Likes from './Likes'

function FeedComponent(props){


  const style = {
    border: "1px solid gray",
    width: "40vw",
    height: "200px",
    display: "flex",
    justifyContent: "space-around",
    marginBottom:"30px",
    alignItems: 'center'
  }
  const column = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
  const image = {
    height: "100px",
    width: "100px",
    marginLeft: "-50px",
    marginTop: "-30px"
  }
  return (
    <div style={style}>
        <div style={column}>
          <p>{props.text}</p>
        </div>
        <div>
          <h3><Likes/></h3>
        </div>
    </div>
  )
}

FeedComponent.propTypes = {
  text: PropTypes.string
}

export default FeedComponent;
