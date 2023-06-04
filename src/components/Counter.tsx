import './counter.scss'

import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1 className='counter'>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}