import React, {useState} from 'react';

const InputItems = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')

    const addNewCounter = () => {
        props.addCounter(inputName, inputNumber)
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
            <button disabled={inputName === ''} onClick={addNewCounter}>Add Counter</button>
        </div>
    );
};

export default InputItems;
