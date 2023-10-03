import React, { useState } from 'react';
import '../css/Dropdown.css'

function Dropdown() {

    const types = ['ТЭМ 05', 'ТЭМ 104', 'ТЭМ 104 К', 'ТЭМ 104 М']

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(types[0]);


    return (
        <div className='dd_wrapper'>
            <button className='dd_button' onClick={() => setIsOpen(!isOpen)}>{name}</button>
            {isOpen && (
                <div className='menu'>
                    <p className='dd_option' onClick={() => { setName(types[0]); setIsOpen(!isOpen)}}>{types[0]}</p>
                    <p className='dd_option' onClick={() => { setName(types[1]); setIsOpen(!isOpen)}}>{types[1]}</p>
                    <p className='dd_option' onClick={() => { setName(types[2]); setIsOpen(!isOpen)}}>{types[2]}</p>
                    <p className='dd_option' onClick={() => { setName(types[3]); setIsOpen(!isOpen)}}>{types[3]}</p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;