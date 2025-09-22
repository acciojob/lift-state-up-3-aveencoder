
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[selectedOption,setSelectedOption] = useState('');
  
  const handleClick=(change)=>{
      setSelectedOption(change)
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1 style={{margin:"50px"}}>Parent Component</h1>
        <ChildChildern1  onChange={handleClick}/>
        <ChildChildern2 onChange={handleClick}/>
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}



function ChildChildern1({onChange}) {
  return (
    <div style={{backgroundColor:"sienna",padding:"10px",marginBottom:"10px"}}>
      <h1>Child Component 1</h1>
       <button onClick={()=>onChange("Option 1")}>Option 1</button>
      </div>
  )
}

function ChildChildern2({onChange}) {
  return (
    <div style={{backgroundColor:"gold",padding:"10px"}}>
      <h1>Child Component 2</h1>
       <button onClick={()=>onChange("Option 2")}>Option 2</button>
      </div>
  )
}






export default App

