import React from 'react';

const Categories = ({categories, handleClick}) => {
 
  return (
    <section className="btn-container">
     {categories.map((category, index) => (
       <button 
       key ={index} 
       type="button" 
       className="filter-btn" 
       onClick={() => {handleClick(category)}}
       >{category}</button>
    ))}
    </section>
  );
};

export default Categories;
