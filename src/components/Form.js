import React, {useState} from "react";
import memesData from "../data/memesData";

export default function Form() {
  const [image, setImage] = useState();

  function newImage(){
    
    const length = memesData.data.memes.length

    const chosen = Math.floor(Math.random()*length)

    const meme = memesData.data.memes[chosen];

    setImage(meme.url);

  }

  


  

  

  return (
    <div>
      <div className="form-inputs">
        <input 
        className="form-textbox" 
        placeholder="Top text" 
        type="text">
        </input>
        <input 
        className="form-textbox" 
        placeholder="Bottom text" 
        type="text">
        </input>
      </div>
      <div className="form-btn">
        <button className="btn" onClick={newImage} >Get a new meme image</button>
      </div>
      <div className="container-meme">
      <img className="meme" src={image}/>
      </div>
    </div>
  );
}
