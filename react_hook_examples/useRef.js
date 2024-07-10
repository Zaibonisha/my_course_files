import React, { useRef, useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('Count: ' + countRef.current);
    }, 3000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleAlertClick}>Show alert in 3 seconds</button>
    </div>
  );
}

export default Timer;
