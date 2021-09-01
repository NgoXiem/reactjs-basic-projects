import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  let [value, setValue] = useState(0);

  // const handleLeft = () => {
  //   value--;
  //   if(value <0){
  //     value = data.length -1;
  //   }
  //   setValue(value);
  // };
  // const handleRight = () => {
  //   value++;
  //   if(value > data.length -1){
  //     value = 0;
  //   }
  //   setValue(value);
  // };
  useEffect(() => {
    if(value <0){
      setValue(data.length -1);
    }
    if(value > data.length -1){
      setValue(0);
    }
  }, [value])

  useEffect(() => {
   const slider = setInterval(() => {
     value++;
     if(value > data.length -1){
      setValue(0);
    }
    if(value <0){
      setValue( data.length -1)
    }
    setValue(value);
   }, 5000) 
   return (() => clearInterval(slider))
  },[value])
  
  return (
    <div className="section">
      <div className="title">
        <h2>
        <span>/</span>
        Reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((item, index) => (
          <article key={item.id} 
          className= {index === value ? "activeSlide"
          : index === value - 1 ? "lastSlide"
          : index === value + 1 ? "nextSlide"
          : index === 0 ? "nextSlide"
          : index === data.length - 1 ? "lastSlide"
          : ""}>
            <img src={item.image} alt="" className="person-img"/>
            <h4>{item.name}</h4>
            <p className="title">{item.title}</p>
            <p className="text">{item.quote}</p>
            <span className="icon">
              <FaQuoteRight></FaQuoteRight>
            </span>
            </article>
            ))}
            <button className="prev" onClick = {() => setValue(value - 1)}>
              <FiChevronLeft></FiChevronLeft>              
            </button>
            <button className="next" onClick = {() => setValue(value + 1)}>
              <FiChevronRight></FiChevronRight>          
            </button>
        </div>
    </div>
  );
}

export default App;
