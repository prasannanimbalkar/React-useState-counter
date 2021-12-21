import React, {useState} from 'react'

function Object()  {
    //normal use state
    //const [state, function] = useState( defaultValue );
    //function useState
    const [state, setState] = useState({ count: 4, theme: 'blue' })
    const theme = state.theme;
    const count = state.count;
    

    const decrementCount = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        });
    }

    const incrementCount = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        });
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default Object
