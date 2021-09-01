import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map(item => item.category))];

function App() {
  const [data, setData] = useState(items);
  const categories= allCategories;
  
  const handleClick = (name) => {
    if(name === "all") {
      setData(items);
    } else {
      let newArr = items.filter(item => item.category === name);
      setData(newArr);
    }
  };

  return (
    <section className="menu section">
      <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
      </div>
      <Categories categories={categories} handleClick={handleClick}></Categories>
      <Menu data ={data}></Menu>
    </section>
  )
}

export default App;
