import React from 'react';


class NewPost extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    let posts = [];
    this.posts = this.posts.bind(this);
    let post = this.state.value;
    this.posts.push(post);
    console.log(posts);
    event.preventDefault();
  }

  render(){

      const divBox = {
        height: "100px",
        width: "100px",
        backgroundColor: "red"
      }

      const input = {
        height: "300px",
        width: "500px",
        position: "absolute"
      }

      const button = {
        position: "absolute",
        zIndex: "0"
      }

    return(
      <div style = {divBox}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input style ={input} id="newPost" type='text' value={this.state.value} onChange={this.handleChange} placeholder = "Tell Us About it"></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      {this.posts.map(post => (
        <FeedComponent text={post} />
      ))};
    )
  }
}

export default NewPost;
