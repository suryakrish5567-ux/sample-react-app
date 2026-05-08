import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={increment} disabled={count>=10}>Increment</button>
        <button onClick={decrement} disabled={count<=0}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter