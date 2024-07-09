import React, { useRef, useState } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Pedro");

  const onClick = () => {
    const newName = inputRef.current.value;
    setName(newName);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Enter new name..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
