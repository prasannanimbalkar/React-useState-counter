import React, {useState} from 'react'

const App = () => {
    //const [state, function] = useState( defaultValue );
    const [count, setCount] = useState(4);

    return (
        <>
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
        </>
    )
}

export default App
