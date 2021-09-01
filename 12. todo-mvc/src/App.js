import React, {useEffect, useState} from'react';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const App = () => {
    const getLocalStorage = () => {
        let list = localStorage.getItem("list")
        if(list){
            return list = JSON.parse(list);
        } else {
            return [];
        }
    };

    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [num, setNum] = useState(0);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    //console.log(new Date().getTime().toString());
    // const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length > 0) {
            const newItem = {
                id: new Date().getTime().toString(),
                name: name,
                checked: false
            }
            setList([...list, newItem]);
            e.currentTarget.reset();
            setName('');
        }    
    }
    //console.log(list);

    const handleCheck = (item) => {
        item.checked = !item.checked;
        setList(list.map(item => item));
    };

    const handleDelete = (id)  => {
        const newArr = list.filter(item => item.id !== id);
        setList(newArr);

    };
    const handleTime = () => {
        const arr1 = list.filter(item => item.checked === false);
         if(arr1.length > 0) {
            const arr2 = list.map(item => ({id:item.id, name: item.name, checked: true}));
            //console.log(arr2)            
            setList(arr2);
        } else {
            const arr3 = list.map(item => ({id:item.id, name: item.name, checked: false}));
            // console.log(arr3)
            // console.log(list)            
            setList(arr3);

        }
    }
    const handleClear = () => {
        const newArr = list.filter(item => item.checked === false);
        setList(newArr);
    }
    const handleAll = () => {
        setStatus('all');
        setFilteredTodos(list);
    }
    const handleActive = () => {
        setStatus('active');
        setFilteredTodos(list.filter(item => item.checked === false));
    }
    const handleCompleted = () => {
        setStatus('completed');
        setFilteredTodos(list.filter(item => item.checked === true));
    }

    useEffect(() => {
        setFilteredTodos(list);
    }, [list]);

    useEffect(() => {
        const newArr = list.filter(item => item.checked === false);
        setNum(newArr.length);
    },[list]);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    },[list]);

    //console.log( (list.filter(item => item.checked === true)).length);
    return ( 
    <div>
        <header>
            <h1>todos</h1>
        </header>
        <main>
            <div className="form-control">
                <button onClick={() => handleTime()}>
                    <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                </button>
                <form action="" className="question" onSubmit ={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="What needs to be done?"
                    onChange = {(e) => setName(e.target.value)}
                    ></input>
            </form>
            </div>
            <section className="list">
                <List filteredTodos={filteredTodos} handleDelete={handleDelete} handleCheck={handleCheck}></List>
            </section>
            {list.length > 0 && <section className="filter">
                <React.Fragment>
                    <p> {num} items left</p>
                    <ul>
                        <li><button type="button" className="all" onClick = {() => handleAll()}><span>All</span></button></li>
                        <li><button type="button" className="active" onClick={() => handleActive()}><span>Active</span></button></li>
                        <li><button type="button" className="completed" onClick = {() => handleCompleted()}><span>Completed</span></button></li>
                    </ul>
                </React.Fragment>
                
            <button type="button" 
            className = {
                (list.filter(item => item.checked === true)).length > 0? "" : "clear"
            }
            onClick ={() => handleClear()}><span>Clear completed</span></button>
            </section>}
        </main>
        <footer>
            <p>Created by Ngo Xiem</p>
        </footer>
    </div>
     );
}
 
export default App;