import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1); 
    };

    const counterStyle = {
        border: '2px solid yellow',
        margin: '6px',
        padding: '6px'
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd} >Add</button>
        </div>
    )
}