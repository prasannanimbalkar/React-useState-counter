import React, {useState} from 'react'
import Object from './objects'

const countInitial = () => {
    return 2
}

const App = () => {
    //normal use state
    //const [state, function] = useState( defaultValue );
    //function useState
    const [count, setCount] = useState(() => countInitial());

    const decrementCount = () => {
        setCount( count - 1 );
    }

    const incrementCount = () => {
        // setCount( count + 1 );
        //always use function version for setting state
        setCount( prevCount => prevCount + 1 );
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <Object />
        </>
    )
}

export default App
