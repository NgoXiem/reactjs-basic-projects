import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {  
  
  const getLocalStorage = () => {
    let arr = localStorage.getItem("arr");
    if(arr) {
      return (arr = JSON.parse(arr));
    } else {
      return [];
    }
  };

  const [value, setValue] = useState('');
  const [arr, setArr] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arr));
  },[arr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    const newArr = [...arr, {value: value, edit: false}];
    //setIsEditing(false);
    if(!isEditing) {
      setArr(newArr);
    } else {
      setArr(newArr.filter(item => item.edit === false));
    }
    if(!edit) {
      setAlert({name:'Item added to the list', style:"alert-success"})
      setTimeout(() => {setAlert({})}, 5000);
    } else {
      setAlert({name: 'Value changed', style:"alert-success"})
      setTimeout(() => {setAlert({})}, 5000);
    }
    setEdit(false);
  }

  const handleClear = () => {
    setArr([]);
    setAlert({name: 'Empty List', style: "alert-danger"});
    setTimeout(() => {setAlert({})}, 5000);
  };

  const handleEdit = (name, edit) => {
    setIsEditing(true);
    setEditItem(name);
    //setEdit(true);
    console.log(arr);
  };

  const handleDelete = (name) => {
    const newArr = arr.filter(item => item.value !== name);
    setArr(newArr);
    setAlert({name:'Item removed',  style: "alert-danger"});
    setTimeout(() => {setAlert({})}, 5000);
  };

  return (
    <div className="section-center">
      <Alert alert ={alert} setAlert={setAlert}></Alert>
      <div className="grocery-form">
        <form onSubmit={handleSubmit}>
          <h3>Grocery Bud</h3>       
          <div className="form-control">
            <input 
            type="text"
            defaultValue={edit ? `${editItem}` : ""}
            className="grocery" 
            placeholder="e.g. eggs"
            onChange={e => {
              setValue(e.target.value.trim());
            }}
            />
            <button className="submit-btn">{edit? "Edit" : "Submit"}</button>
          </div>
        </form>
      </div>
      <List arr={arr}
      value={value}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      ></List>
      {arr.length > 0  && <button className="clear-btn" onClick={handleClear}>Clear Item</button>}
    </div>
    );
}

export default App;
