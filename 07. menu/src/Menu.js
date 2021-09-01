import React from 'react';

const Menu = ({data}) => {
  return (
      <section className="section-center">
        {data.map(item => (
          <div className="menu-item" key={item.id}>
            <img src= {item.img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <span className="price">${item.price}</span>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        ))}
          
      </section>
    );
};

export default Menu;
