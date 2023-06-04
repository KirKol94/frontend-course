import classes from './Counter.module.scss'
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
            <div className={classes.red}>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}