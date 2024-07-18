import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    }
    const speak = ()=>{
      let message = new SpeechSynthesisUtterance();
      message.text = text;
      window.speechSynthesis.speak(message);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleReverse = (event) => {
      let strArr = text.split("");
      strArr = strArr.reverse();
      let newText = strArr.join("");
      setText(newText);
    };

    /* Word Counter Function */
  const countWords = () => {
    let len;
    len = text.split(" ");
    if (len[len.length - 1] === "") {
      return len.length - 1;
    }
    return len.length;
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

  }

    const[text,setText] = useState('');
    const wordCount = countWords(text);

    // text = "new text" // wrong way to change the state
    // setText("newText") //correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button type ="submit" className="btn btn-warning mx-2 my-2" onClick={speak}>Listen Text</button>
       <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{wordCount} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
  
}
