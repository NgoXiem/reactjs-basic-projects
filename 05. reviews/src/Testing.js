import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Testing = () => {
  let [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNum = (num) => {
    if(num < 0) {
      num = people.length -1;
      return num;
    }

    if(num > people.length -1) {
      num = 0;
      return num;
    }
    return num;
  }

  const prevPerson = () => {
    index--;
    // if(index < 0 ) {
    //   index = people.length -1;
    //   return index;
    // }
    const newIndex = checkNum(index);
    setIndex(newIndex);
    
  };

  const nextPerson = () => {
    index++;
    // if(index > people.length -1 ) {
    //   index = 0;
    //   return index;
    // }
    const newIndex = checkNum(index);
    setIndex(newIndex);
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if(randomNum === index) {
      randomNum = index + 1;
      return randomNum;
    }
    setIndex(randomNum);
  };
    return (
         <article className="review">
          <div className="img-container">
            <span className="quote-icon">
            <FaQuoteRight />
            </span>
            <img src={image} className="person-img" alt=""></img>
          </div>
          <p className="author">{name}</p>
          <p className="job">{job}</p>
          <p className="info">{text}</p> 
          <div className="btn-container">
            <button className="prev-btn" onClick={() => prevPerson()}>
              <FaChevronLeft />
              </button>
            <button className="next-btn" onClick ={() => nextPerson()}>
              <FaChevronRight />
              </button>
          </div>
          <button className="random-btn" onClick ={() => randomPerson()}>Surprise Me</button>
        </article>
    )
};
export default Testing;