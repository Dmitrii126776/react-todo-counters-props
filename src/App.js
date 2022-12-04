import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import Header from "./Header";
import InputItems from "./InputItems";
import ListItems from "./ListItems";

function App() {
    const header = 'Fruits Counters'
    const [counters, setCounters] = useState([
        {id: uuidv4(), name: 'banana', value: 22}
    ])
    const addCounter = (inputName, inputNumber) => {
        setCounters([...counters, {id: uuidv4(), name: inputName, value: Number(inputNumber) || 0}])
    }

    return (
        <div className="App">
            <Header header={header}/>
            <InputItems addCounter={addCounter}/>
            <ListItems list={counters} setCounters={setCounters}/>
        </div>
    );
}

export default App;
