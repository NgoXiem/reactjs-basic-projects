import React from 'react';

const Form = ({setTerm, handleSubmit}) => { 
        return (
            <form onSubmit={handleSubmit}>
                <h2>BruTube</h2>
                <input type="text" id="term" placeholder="Search videos" onChange={(e) => setTerm(e.target.value)}></input> 
                <button>
                    <i className="fas fa-search fa-lg"></i>
                </button>
            </form>
        );
}

export default Form;