import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        count > 0 && setCount(count - 1)
    }

    return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button style={{marginRight: '12px'}} onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Counter