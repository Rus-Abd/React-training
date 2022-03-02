import React, { useReducer, useState } from 'react';
import './form.css';

const Form = () => {
  const [input, setInput] = useState('');
  function calc(e: React.MouseEvent) {
    const target: EventTarget = e.target;

    if ((target as HTMLElement).innerText === '=') {
      setInput(eval(input));
    } else if ((target as HTMLElement).innerText === 'AC') {
      setInput('');
    } else if ((target as HTMLElement).tagName === 'BUTTON') {
      setInput(input + (target as HTMLElement).innerText);
    }
    console.log(input);
  }
  return (
    <div className="form">
      <div className="col1">
        <button className="col1-item col-item" onClick={calc}>
          +
        </button>
        <button className="col1-item col-item" onClick={calc}>
          7
        </button>
        <button className="col1-item col-item" onClick={calc}>
          4
        </button>
        <button className="col1-item col-item" onClick={calc}>
          1
        </button>
        <button className="col1-item col-item" onClick={calc}>
          0
        </button>
      </div>
      <div className="col2">
        <button className="col2-item col-item" onClick={calc}>
          -
        </button>
        <button className="col2-item col-item" onClick={calc}>
          8
        </button>
        <button className="col2-item col-item" onClick={calc}>
          5
        </button>
        <button className="col2-item col-item" onClick={calc}>
          2
        </button>
        <button className="col2-item col-item" onClick={calc}>
          .
        </button>
      </div>
      <div className="col3">
        <button className="col3-item col-item" onClick={calc}>
          x
        </button>
        <button className="col3-item col-item" onClick={calc}>
          9
        </button>
        <button className="col3-item col-item" onClick={calc}>
          6
        </button>
        <button className="col3-item col-item" onClick={calc}>
          3
        </button>
        <button className="col3-item col-item clear" onClick={calc}>
          {' '}
          AC
        </button>
      </div>
      <div className="col4">
        <div className="col4-item col-item">&#xF7;</div>
        <div className="col4-item col-item equal">=</div>
      </div>
    </div>
  );
};

export default Form;
