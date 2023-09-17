import React, { useState, useMemo } from 'react';

function FactorialCalculator({ number }) {
  // Use useMemo to memoize the result of the factorial calculation
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
    }

    return result;
  }, [number]); // Recompute only when the 'number' prop changes

  return (
    <div>
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default function App() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <FactorialCalculator number={number} />
    </div>
  );
}
