import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, select, onHandleSelect}) => {
    
    const [active, setActive] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if(ref.current.contains(e.target)) {
                return;
            } else {
             setActive(false);
            }
         };

        document.body.addEventListener('click', onBodyClick, {capture: true} );

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        };
    }, []);

    const renderedOptions = options.map(option => {
        
        if(select === option.label) {
            return null;
        }
        
        return (
            <div key={option.value} 
            className="item" 
            onClick={() => {
                onHandleSelect(option.label)
                // setActive(!active);
                }}>
                {option.label}
            </div>
        );
    });

    return ( 
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${active? 'visible active': ''}`} onClick={() => setActive(!active)}>
                    <i className="dropdown icon" ></i>
                    <div className="text">{select}</div>
                    <div className={`menu ${active? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dropdown;