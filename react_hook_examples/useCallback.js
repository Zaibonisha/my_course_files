import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the callback function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
