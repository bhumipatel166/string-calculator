import React from 'react';

function StringCalculator() {
 

  return (
    <div className="string-calculator">
      <input
        type="text"
        value={input}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default StringCalculator;
