import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div  className="container my-4" style={{
              color: props.mode === "dark" ? "white" : "black",
            }}>
            <h3>Preview</h3>
            <p> {text.length>0?text:
            "No text to preview"}</p>
          <div > 
            <h3>Text Summary</h3>
            <b> No of Words are {text.split(" ").filter((element)=>{return element.length!==0}).length}</b>
            <br></br>
            <b>No of Characters are {text.length}</b>
            <br />
            <b>Time required {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min(s)</b>
            <br />
          </div>
      </div>
    </>
  );
}
