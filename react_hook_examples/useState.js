import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count", and a function to update it called "setCount".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
