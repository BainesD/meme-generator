import React from "react";

export default function Form() {
  return (
    <div>
      <div className="form-inputs">
        <input className="form-textbox" placeholder="Top text" type="text"></input>
        <input className="form-textbox" placeholder="Bottom text" type="text"></input>
      </div>
      <div className="form-btn">
        <button className="btn" type="submit">Get a new meme image</button>
      </div>
    </div>
  );
}
