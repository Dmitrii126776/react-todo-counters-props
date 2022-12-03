import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";

function App() {
    const [counters, setCounters] = useState([
        {id: uuidv4(), name: 'orange', value: 22}])
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    const addCounter = () => {
        const newCounter = {id: uuidv4(), name: inputName, value: Number(inputNumber) || 0}
        setCounters([...counters, newCounter])
        setInputName('')
        setInputNumber('')
    }
    const minus = (id) => {
        setCounters(counters.map(el => el.id === id ? {...el, value: el.value - 1} : el))
    }
    const plus = (id) => {
        setCounters(counters.map(el => el.id === id ? {...el, value: el.value + 1} : el))
    }
    const deleteCounter = (id) => {
        setCounters(counters.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h2>Fruits Counters</h2>
            <div>
                <input type='text' placeholder='fruit name'
                       value={inputName}
                       onChange={(e) => setInputName(e.target.value)}/>
                <input type='text' placeholder='fruit number'
                       value={inputNumber}
                       onChange={(e) => setInputNumber(e.target.value)}/>
                <button onClick={addCounter}>Add Fruits</button>
            </div>
            <ol>
                {counters.map(el =>
                    (
                        <li key={el.id}>
                            {el.name}
                            <button onClick={() => minus(el.id)}>-</button>
                            {el.value}
                            <button onClick={() => plus(el.id)}>+</button>
                            <button onClick={() => deleteCounter(el.id)}>Delete</button>
                        </li>
                    ))}
            </ol>
        </div>
    );
}

export default App;
