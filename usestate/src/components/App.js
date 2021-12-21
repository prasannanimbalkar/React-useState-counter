import React from 'react'

const App = () => {
    //has [state and function]
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
