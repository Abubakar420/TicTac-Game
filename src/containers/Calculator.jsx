/* eslint-disable no-use-before-define */
/* eslint-disable no-new-func */
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [setResult] = useState('');
  const [lastClickedOperator, setLastClickedOperator] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key >= '0' && event.key <= '9') {
        setInput(input + event.key);
        setLastClickedOperator(false);
      } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        if (!lastClickedOperator) {
          setInput(input + event.key);
          setLastClickedOperator(true);
        }
      } else if (event.key === '.' && !input.includes('.')) {
        setInput(`${input}.`);
        setLastClickedOperator(false);
      } else if (event.key === 'Enter') {
        calculateResult();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setResult('');
      setLastClickedOperator(false);
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (!lastClickedOperator) {
        setInput(input + value);
        setLastClickedOperator(true);
      }
    } else {
      setInput(input + value);
      setLastClickedOperator(false);
    }
  };

  const calculateResult = () => {
    try {
      const evaluate = new Function(`return ${input}`);
      const res = evaluate();
      setInput(res.toString());
      setResult(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculatorMainDiv">
      <div className="calculator">
        <div className="policeLight">
          <h1>Police Calculator </h1>
        </div>
        <input type="text" value={input} placeholder="0" />
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
