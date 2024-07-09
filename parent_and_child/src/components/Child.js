import React from 'react';
import './child.css';

function Child(props) {
    return (
        <div className="child">
            <h1>Child</h1>
            <button onClick={() => props.changeWord('nisha')}>Click to change title</button>
        </div>
    );
}

export default Child;
