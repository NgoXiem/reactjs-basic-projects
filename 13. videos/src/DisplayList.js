import React from 'react';

const DisplayList = ({list, handleClick}) => {
    return ( 
        <div className="list">
            {list.length > 0 && list.map((item, index) => (
                <div key={index} className="item" onClick={() => {handleClick(item.id.videoId, index)}}>
                    <img src={item.snippet.thumbnails.default.url} alt="" />
                    <p>{item.snippet.title}</p>
                </div>
            ))}
        </div>
     );

}
 
export default DisplayList;