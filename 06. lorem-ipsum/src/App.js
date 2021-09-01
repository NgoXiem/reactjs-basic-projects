import React, { useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(value > data.length) {
    //   setText(data);
    // } 

    // if(value > 0 ) {
    //   const newArr = data.slice(0,parseInt(value));
    //   setText(newArr);
    // }
    let arr1 = [];
    for(let i=0; i<value; i++) {
      const randomNum = Math.floor(Math.random()*data.length);
      arr1.push(data[randomNum]);
    }
    setText(arr1);
  }
  
  return (
    <div className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form action="" className="lorem-form" onSubmit ={handleSubmit}>
        <label>Paragraph: </label>
        <input 
        type="number" 
        placeholder="0"
        onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <div className="result">
         {text.map((item, index) => (
           <p key={index}>{item}</p>
         ))} 
      </div>
    </div>
    
    )
}

export default App;

