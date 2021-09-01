import React, { useState, Component }  from 'react';
import List from './List';
import data from './data';

// function App() {
//   let [list, setList] = useState(data);
//   //console.log(data);
//   const handleClear = () => {
//     setList([]);
//   };
//   return (
//     <main>
//       <List list={list} handleClear = {handleClear}></List> 
//     </main>         
//   );
// }

class App extends React.Component {

  state = {data: data};
  
  handleClear = () => {
    this.setState({data: []})
  }

  render() {
      return (
        <main>
          <List data = {this.state.data} handleClear={this.handleClear}></List> 
        </main>         
  );
  }
}
export default App;
