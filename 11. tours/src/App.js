import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  
  const useFetch = (url) => {
    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsPending(false);
        //console.log(data);
      })
      .catch(err => console.log(err));
      // return {data, isPending, err};
    },[]);
  }
  
  useFetch(url);

  const handleClick = (id) => {
    const filteredArr = data.filter(tour => tour.id !== id); 
    setData(filteredArr);
  };
  return (
    <main>
      {isPending && <Loading></Loading>}
      {data &&
      <section>
        <div className="title">
          <h2>Tours</h2>
          <div className="underline"></div>
        </div>
        <Tours data = {data} handleClick={handleClick}></Tours>
      </section>
      } 
    </main>
  );
}

export default App;
