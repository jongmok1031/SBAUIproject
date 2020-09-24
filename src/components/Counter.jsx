import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleClick2 = () => {
        setCount(count - 1)
    }
    return <>
        <h1>Counter : {count}</h1>
        <button onClick={handleClick}> + </button>
        <button onClick={handleClick2}> subtract </button>
    </>
}
export default Counter

     