import React, { useState } from "react";
import "./Kalkulator.css";

const Kalkulator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {buttons.map((btn, index) =>
            btn === "=" ? (
              <button key={index} onClick={handleCalculate} className="btn equals">
                {btn}
              </button>
            ) : (
              <button key={index} onClick={() => handleClick(btn)} className="btn">
                {btn}
              </button>
            )
          )}
          <button onClick={handleClear} className="btn clear">C</button>
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
