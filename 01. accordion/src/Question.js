import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  let [showContent, setShowContent] = useState(true);
  const handleClick = () => {
    setShowContent(!showContent);
  }
  return (
        <div className="question">
          <header>
          <h4>{title}</h4>
          <button className="btn" onClick ={() => {handleClick()}}>
            {showContent? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}
          </button>
        </header>
        {!showContent && <p>{info}</p>}
        </div>
  );
};

export default Question;
