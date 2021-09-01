import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import Details from './Details';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setfilteredData] = useState();
//Fetch data 
  useEffect(() => {
    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error('Could not fetch data from that source')
      }
    }).then(data => {
      setData(data);
      setIsLoading(false);
      setTabs([...new Set(data.map(item => item.company))]);
      setfilteredData([data[0]]);
    })
    .catch(err => console.log(err));
  },[]);

//handle Click
const handleClick = (data, index, company) => {
  const newArr = data.filter(item => item.company === company);
  setfilteredData(newArr);
  setValue(index);
};

  return (
    <div className="section">
       {isLoading && <h2 className="loading">Loading...</h2>}
       {data &&
       <React.Fragment>
          <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <Tabs tabs={tabs} data={data} handleClick={handleClick} value={value}></Tabs>
          {filteredData && <Details filteredData={filteredData}></Details>}
        </div>
       </React.Fragment>}
    </div> 
  );
}

export default App;
