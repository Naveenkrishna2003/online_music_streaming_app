import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function red() {
  // Access the Redux state
  const count = useSelector((state) => state.count);

  // Dispatch Redux actions
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default red;