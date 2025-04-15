// Calculator.jsx
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Fel');
    }
  };

  const buttons = [
    '7','8','9','/',   '4','5','6','*',    '1','2','3','-',  '0','.','=','+','Del'
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="button-grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') handleCalculate();
              else if (btn === 'Del') handleClear();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
