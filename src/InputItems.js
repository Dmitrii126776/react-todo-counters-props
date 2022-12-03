import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const InputItems = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')

    const addCounter = () => {
        const newCounter = {id: uuidv4(), name: inputName, value: Number(inputNumber) || 0}
        props.setCounters([...props.list, newCounter])
        setInputName('')
        setInputNumber('')
    }

    return (
        <div>
            <input type='text'
                   placeholder='fruit name'
                   value={inputName}
                   onChange={(e) => setInputName(e.target.value)}
            />
            <input type='text'
                   placeholder='fruit number'
                   value={inputNumber}
                   onChange={(e) => setInputNumber(e.target.value)}
            />
            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
};

export default InputItems;
