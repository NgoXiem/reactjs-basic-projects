import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const checkNum = (number) => {
    if(number> people.length) {
      return 0;
    }
    if(index<0) {
      return number = people.length + index;
    }
  };
  const nextPerson = () => {
    setIndex(index =>{
      let newIndex = index - 1;
      return checkNum(newIndex);
      //console.log(checkNum(newIndex));
    });
    };
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNum(newIndex);
      console.log(checkNum(newIndex));
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.randomPerson()*people.length);
    setIndex(index =>{
      if(randomNum === index) {
        let newIndex = randomNum + 1;
        return checkNum(newIndex);
      }
    });
  };
  
  return (
    <article className="review">
      <div className="img-container">
        <span className="quote-icon">
        <FaQuoteRight />
        </span>
        <img src={image} className="person-img"></img>
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
   
  );
};

export default Review;
