import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Details = ({filteredData}) => {
    return ( 
        <div className="job-info">
            {filteredData.map(item => (
                <React.Fragment key={item.id}>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p className="job-date">{item.dates}</p>
                <div className="job-desc">
                    {item.duties.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="job-icon">
                                <FaAngleDoubleRight></FaAngleDoubleRight>
                            </span>
                            <p>{item}</p>
                        </React.Fragment>
                    ))}
                </div>
                <button className="btn">More Info</button>
             </React.Fragment>
            ))}
        </div>
     );
}
 
export default Details;