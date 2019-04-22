import React from "react";
import pic from "../assets/images/pic.jpg";
import PropTypes from "prop-types";

class Likes extends React.Component{


constructor(props){
  super(props);
  this.state = {
    likes: 0
  }
  this.handleLike = this.handleLike.bind(this);
};

handleLike(){
  this.setState((state) => {
    return {likes: state.likes + 1 };
  });
}




  render(){
    return (
      <div>
        <h3 onClick={this.handleLike}>Likes</h3>
        <div>{this.state.likes}</div>
      </div>
    )
  }
}



export default Likes;
