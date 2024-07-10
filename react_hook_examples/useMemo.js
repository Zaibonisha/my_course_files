import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ num }) {
  // A function that simulates an expensive computation
  const expensiveCalculation = (num) => {
    console.log('Computing...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy task
    return num * 2;
  };

  // Memoize the result of the expensive computation
  const computedValue = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
    </div>
  );
}

function App() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent num={num} />
      <button onClick={() => setNum(num + 1)}>Increment num</button>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
