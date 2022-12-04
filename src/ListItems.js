import React from 'react';

const ListItems = (props) => {
    const minus = (id) => {
        props.setCounters(props.list.map(el => el.id === id ? {...el, value: el.value > 0 ? el.value - 1 : 0} : el))
    }
    const plus = (id) => {
        props.setCounters(props.list.map(el => el.id === id ? {...el, value: el.value + 1} : el))
    }
    const deleteCounter = (id) => {
        props.setCounters(props.list.filter(el => el.id !== id))
    }

    return (
        <div>
            <ol>
                {props.list.map(el =>
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
};

export default ListItems;
