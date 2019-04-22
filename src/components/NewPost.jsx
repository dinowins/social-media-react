import React from 'react';

function NewPost(){
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

  return(
    <div style = {divBox}>
      <div>
        <input style ={input} placeholder = "Tell Us About it"></input>
      </div>
    </div>
  )
}

export default NewPost;
