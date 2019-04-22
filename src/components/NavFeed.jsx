import React from "react";
import NewPost from './NewPost';


class NavFeed extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userEngaged: false
    };
    this.handleEngagement = this.handleEngagement.bind(this);
    this.handleDisengagement = this.handleDisengagement.bind(this);
  }

  handleEngagement(){
    this.setState({userEngaged: true});
    console.log("User is engaged with posting a status")
  }

  handleDisengagement() {
    this.setState({userEngaged: false});
    console.log("The input box should disappear")
  }

  render(){

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
      color: "blue",

    }

    const divBox = {
      height: "100px",
      width: "100px",
      backgroundColor: "red"
    }


      if (!this.state.userEngaged){
        return(
          <div style = {style} >
            <div style = {square}>
            </div>
            <input onClick={this.handleEngagement}style = {input} placeholder = "What's happening?"></input>
          </div>
          )} else {
            return(
              <div>
                <div onClick={this.handleDisengagement} style = {divBox}>
                </div>
                <div><NewPost/></div>

              </div>
            )}
          }
        }

export default NavFeed;
