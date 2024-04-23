/* eslint-disable no-eval */
// Init
import React, { useState } from 'react';

// Home Component
export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="calculatorMainDiv">
      <div className="calculator">
        <input
          type="text"
          value={input}
          placeholder="0"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="buttons">
          <button type="button" onClick={() => handleClick('7')}>
            7
          </button>
          <button type="button" onClick={() => handleClick('8')}>
            8
          </button>
          <button type="button" onClick={() => handleClick('9')}>
            9
          </button>
          <button type="button" onClick={() => handleClick('+')}>
            +
          </button>
          <button type="button" onClick={() => handleClick('4')}>
            4
          </button>
          <button type="button" onClick={() => handleClick('5')}>
            5
          </button>
          <button type="button" onClick={() => handleClick('6')}>
            6
          </button>
          <button type="button" onClick={() => handleClick('-')}>
            -
          </button>
          <button type="button" onClick={() => handleClick('1')}>
            1
          </button>
          <button type="button" onClick={() => handleClick('2')}>
            2
          </button>
          <button type="button" onClick={() => handleClick('3')}>
            3
          </button>
          <button type="button" onClick={() => handleClick('*')}>
            *
          </button>
          <button type="button" onClick={() => handleClick('0')}>
            0
          </button>
          <button type="button" onClick={() => handleClick('.')}>
            .
          </button>
          <button type="button" onClick={() => handleClick('=')}>
            =
          </button>
          <button type="button" onClick={() => handleClick('/')}>
            /
          </button>
          <button type="button" onClick={() => handleClick('C')}>
            C
          </button>
        </div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}
