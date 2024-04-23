/* eslint-disable no-new-func */
import React, { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [setResult] = useState('');
  const [lastClickedOperator, setLastClickedOperator] = useState(false);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evaluate = new Function(`return ${input}`);
        const res = evaluate();
        setInput(res.toString());
        setResult(res.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
      setLastClickedOperator(false); // Reset last clicked operator
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (!lastClickedOperator) {
        // Only allow operator if last click wasn't an operator
        setInput(input + value);
        setLastClickedOperator(true);
      }
    } else {
      setInput(input + value);
      setLastClickedOperator(false); // Reset last clicked operator when a number button is clicked
    }
  };

  return (
    <div className="calculatorMainDiv">
      <div className="calculator">
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly // Make the input field read-only to prevent manual input
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
          <button type="button" onClick={() => handleClick('.')}>
            .
          </button>
          <button type="button" onClick={() => handleClick('0')}>
            0
          </button>
          <button type="button" onClick={() => handleClick('/')}>
            /
          </button>
          <button type="button" onClick={() => handleClick('=')}>
            =
          </button>
          <button type="button" onClick={() => handleClick('C')} className="clearBtn">
            C
          </button>
        </div>
      </div>
    </div>
  );
}
