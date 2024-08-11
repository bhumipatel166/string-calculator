import React, { useState } from 'react';

function StringCalculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
       
          setResult(input);
       
      };

  return (
    <div className="string-calculator">
       <h2>String Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
}

export default StringCalculator;
