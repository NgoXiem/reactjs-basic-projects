import React from 'react';
const Tabs = ({tabs, data, handleClick, value}) => {
    return ( 
            <div className="btn-container">
            {tabs.map((tab, index) => (
                <button key={index} className={`job-btn ${value === index && "active-btn"}` } onClick ={() => handleClick(data,index,tab)}>{tab}</button>
            ))}
            </div>
     );
}
 
export default Tabs;