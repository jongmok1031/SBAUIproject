import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick_add = () => {
        setCount(count + 1)
    }
    const handleClick2_subtract = () => {
        setCount(count - 1)
    }
    return <>
        <h1>Counter : {count}</h1>
        <button onClick={handleClick_add}> add one </button>
        <button onClick={handleClick2_subtract}> subtract one </button>
    </>
}
export default Counter

    //  let 변수 const 상수
    //  count getter 
    //  기능은 상수로 써야돼
    //  setCount setter