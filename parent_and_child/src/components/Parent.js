import React, { useState } from 'react';
import './parent.css';
import Child from './Child';

function Parent() {
    const [word, setWord] = useState('Parent'); // Use a string as the initial state
    return (
        <div className="parent">
            <h1>{word}</h1>
            <Child changeWord={word => setWord(word)} />
        </div>
    );
}

export default Parent;
