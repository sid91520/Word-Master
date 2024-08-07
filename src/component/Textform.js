import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleclick1=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
  }
  const handleclick2=()=>{
    let newtext=text.toLocaleLowerCase()
    setText(newtext)
  }
  const handleclick3=()=>{
    let text=""
    setText(text)
  }

  const handleclick4=()=>{
    let newtext =text.split(" ");

for (let i = 0; i < newtext.length; i++) {
    newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
}
newtext=newtext.join(" ");
setText(newtext)
  }
  const handleclick5 = () => {
    let newtext = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newtext += text[i].toUpperCase();
      } else {
        newtext += text[i].toLowerCase();
      }
    }
    setText(newtext);
  }
  
  const handleclick6 = () => {
    if ((text === null) || (text === '')) return false;
    let newtext = text.toString().replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    setText(newtext);
  }  
  const handleclick7=()=>{
    navigator.clipboard.writeText(text);
  }

  const handleonchange=(event)=>{
    setText(event.target.value)
  }
   
  const getWordCount = () => {
    return text.split(/\s+/).filter((element) => element.length !== 0).length;
  };

   return (
    <><div>
<div className="mb-3">
  <label className="form-label"><h2 className="text-Dark" style={{color:props.mode1==="dark"?"white":"black"}}>{props.heading}</h2></label>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleonchange} style={{backgroundColor:props.mode1==="dark"?"white":"gray"}} rows="5"></textarea>
</div>


<button type="button" onClick={handleclick1} className="btn btn-success mx-3 my-3">Convert to Upper case</button>
<button type="button" onClick={handleclick2} className="btn btn-danger mx-3 my-3">Convert to Lower case</button>

<button type="button" onClick={handleclick4} className="btn btn-info mx-3 my-3">Convert to Capitalized case</button>

<button type="button" onClick={handleclick5} className="btn btn-secondary mx-3 my-3">Convert to Alternate case</button>

<button type="button" onClick={handleclick6} className="btn btn-primary mx-3 my-3">Convert to Title case</button>

<button type="button" onClick={handleclick7} className="btn btn-primary mx-3 my-3">Copy to Clipboard</button>


<button type="button" onClick={handleclick3} className="btn btn-warning mx-3 my-3">Clear</button>
    </div>
    <div className="container my-3">
  <h1 className="text-Dark" style={{color:props.mode1==="dark"?"white":"black"}}>Text Summary</h1>
  <p className="text-Dark" style={{color:props.mode1==="dark"?"white":"black"}}>Number of characters: {text.length}</p>
  <p className="text-Dark" style={{ color: props.mode1 === "dark" ? "white" : "black" }}>
  Number of words: {getWordCount()}</p>
  <p className="text-Dark" style={{ color: props.mode1 === "dark" ? "white" : "black" }}>Time required to read: {0.25 * getWordCount()} seconds</p>
</div>
    </>
  )
}
// Textform.defaultProps={
//     heading:"Please enter Text"
// }