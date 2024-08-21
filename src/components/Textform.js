import React, { useState } from "react";

export default function Textform(props) {
  const handleclick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","sucess");
  };

  const handlelocclick = () => {
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","sucess");
  };

  const handleOnchange = (event) => {
    console.log("After Change");
    setText(event.target.value);
  };

  const removeclick = () => {
   let newtext = ' ';
   setText(newtext)
  };

  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Copied to clipboard","sucess");
  }


  const removeExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces has been removed","sucess");
  };


  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style = {{color:props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange} style = {{backgroundColor:props.mode === 'dark' ? '#042743': 'white',  color:props.mode === 'dark' ? 'white': '#042743'}}
            id="Mybox"
            rows="8"
          >
            {" "}
          </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleclick}>
          Convert To UpperCase
        </button>

        <button  disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handlelocclick}>
          Convert To LowerCase
        </button>

        <button  disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleCopy}>
          Copy text
        </button>

        <button  disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={removeExtraSpaces}>
          Remove Extra spaces
        </button>

        <button  disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={removeclick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style = {{color:props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0 }).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0 }).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0?"Nothing to preview":text}</p>
      </div>
    </>
  );
}
