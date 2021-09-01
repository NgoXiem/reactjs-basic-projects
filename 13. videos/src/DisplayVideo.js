import React from 'react';

const DisplayVideo = ({list, src, index}) => {
    
    return ( 
        <div className="results">
            {list.length> 0 && 
            <React.Fragment>
                <iframe 
                    type="text/html" 
                    height="320px" 
                    width="640px" 
                    frameBorder="0"
                    title={list[index].snippet.title} 
                    src={src ? src : `http://www.youtube.com/embed/${list[0].id.videoId}`}></iframe>
                <div className="info">
                    <h3>{list[index].snippet.title }</h3>
                    <p>{list[index].snippet.description}</p>
                </div>
            </React.Fragment>
            }
        </div> 
     );
}
 
export default DisplayVideo;