import React, { createContext, useContext } from 'react';

// Create a context with a default value
const MyContext = createContext('default value');

function MyComponent() {
  // Use the useContext hook to get the current value of the context
  const value = useContext(MyContext);

  return <div>{value}</div>;
}

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
