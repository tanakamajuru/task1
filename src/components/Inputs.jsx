import React, { useState, useEffect } from 'react';

const Addition = ({ setSum }) => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => { setSum(num1 + num2); },
     [num1, num2, setSum]); 

    return (
        <div className="addition">
            <h1>Add Two Numbers</h1>
            <label>First Number:</label>
            <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value) || 0)}  />
            <br />
            <label>Second Number:</label>
            <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value) || 0)} 
            />
            <br />
        </div>
    );
};

export default Addition;