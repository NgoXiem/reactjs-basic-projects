import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({arr, handleEdit, handleDelete}) => {
  return (
    <div className="grocery-container">
        {arr.map((item, index) => (
          <div className="grocery-item" key={index}>
          <p className="title">{item.value}</p>
          <div>
            <button className="edit-btn" onClick ={() => {
              handleEdit(item.value);
              item.edit = true;
              }}>
                <FaEdit/>
              </button>
            <button className="delete-btn" onClick = {() => handleDelete(item.value)}><FaTrash/></button>
          </div>
        </div>
        ))}
  </div>
    );
}

export default List;
