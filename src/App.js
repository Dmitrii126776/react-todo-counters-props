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
    return (
        <div className="App">
            <Header header={header}/>
            <InputItems list={counters} setCounters={setCounters}/>
            <ListItems list={counters} setCounters={setCounters}/>
        </div>
    );
}

export default App;
