import React, { useState } from 'react';

const Tour = ({id, name,image, info, price, handleClick}) => {
  const [read, setRead] = useState(false);
  const [tag, setTag] = useState('Read More')
  const handleRead = () => {
      setRead(!read);
      if(tag === "Read More") {
        setTag('Show Less');
      }
      if(tag === "Show Less") {
        setTag('Read More');
      }
      } 

  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>
          {read? info : `${info.substring(0,200)}...`}
          <button onClick={() => handleRead()}>{tag}</button>
        </p>
        <button className="delete-btn" onClick = {() => handleClick(id)}>Not Interest</button>
      </footer>
    </article>
  
  );
};

export default Tour;
