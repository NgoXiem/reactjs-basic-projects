import React from 'react';

// const List = ({list, handleClear}) => {
//   return ( 
//     <div className="container">
//       <h3>{list.length} birthdays today</h3>
//       {list.map((item) => (
//           <div className="person" key={item.id}>
//             <img src={item.image} alt="" />
//             <h4>{item.name}</h4>
//             <p>{item.age} years old</p>
//           </div>
//         ))}
//       <button onClick= {() => handleClear()}>Clear All</button>
//     </div>
//   );
// }
 
class List extends React.Component {
    
  render () {
    return(
      <div className="container">
        <h3>{this.props.data.length} birthdays today</h3>
        {this.props.data.map((item) => (
            <div className="person" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p>{item.age} years old</p>
            </div>
          ))}
        <button onClick= {() => this.props.handleClear()}>Clear All</button>
      </div>
    )
    
  }
}

export default List;