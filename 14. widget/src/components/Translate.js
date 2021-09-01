import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Arabics',
        value: 'ar'
    }, 
    {
        label: 'Hindi',
        value: 'hi'
    }, 
    {
        label: 'Vietnamese',
        value: 'vi'
    }
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0].label);
    // const [langValue, setLangValue] = useState(option[0].value);
    const [text, setText] = useState('');
    return ( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value ={text} onChange ={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown options={options}
            label="Select a language"
            select={language}
            onHandleSelect={setLanguage}
            ></Dropdown>
            <hr />
                <h3 className="ui header">Output</h3>
                <Convert language={language} text={text} ></Convert>
        </div>
     );
}
 
export default Translate;