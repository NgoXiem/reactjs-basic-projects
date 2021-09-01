import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const List = ({filteredTodos, handleDelete, handleCheck}) => {

    return (
        <React.Fragment>
        {filteredTodos.map(item => {
            //console.log(item)
            //let {name, id} = item;
            return (
            <div className="item" key ={item.id}>
                <form action="">
                    <input 
                    type="checkbox" 
                    checked = {item.checked}
                    onChange = {() => handleCheck(item)}
                    />
                    <label className ={item.checked? `done` : ``}>{item.name}</label>
                </form>
                <button onClick={() => {handleDelete(item.id)}}>
                    <FontAwesomeIcon icon ={faTimes} size="lg" />
                </button>    
            </div>
            )
        }
        )}
        </React.Fragment>
    );
}
 
export default List;