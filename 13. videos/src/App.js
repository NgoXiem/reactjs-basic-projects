import React, {useState} from 'react';
import Form from './Form';
import DisplayVideo from './DisplayVideo';
import DisplayList from './DisplayList';

const App = () => {
    
    const getLocalStorage = () => {
        if(localStorage.getItem("videos")) {
            return JSON.parse(localStorage.getItem("videos"));
        } else {
            return [];
        }
    }

    const [term, setTerm] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [err, setErr] = useState('');
    const [src, setSrc] = useState('');
    const [index, setIndex] = useState(0);

    const fetchData = async (term) => {
        const key = "AIzaSyBlQLPrq6BVbgUZhoB5oKNEmNWjeY3TkMA";
        const base =  "https://www.googleapis.com/youtube/v3/search"
        const url = `${base}?part=snippet&q=${term}&key=${key}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.reset();
        if(term) {
            fetchData(term)
            .then(data => {
            setList(data);
            localStorage.setItem("videos", JSON.stringify(data));
           })
            .catch(err => setErr(err));
        }
        setTerm('');
    }
    
    const handleClick = (id, index) => {
        setSrc(`http://www.youtube.com/embed/${id}`);
        setIndex(index);
    }
    return(
        <section>
            {err.length===0 &&
            <React.Fragment>
                <Form setTerm={setTerm} handleSubmit={handleSubmit}></Form>
                <DisplayVideo list ={list} src={src} index={index}></DisplayVideo>
                <DisplayList list ={list} handleClick={handleClick}></DisplayList>
            </React.Fragment>
            }
        </section>
    );
}

export default App;