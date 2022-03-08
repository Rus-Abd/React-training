import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import './form.css';

const Form = () => {
const dispatch=useDispatch()
  const [input, setInput] = useState('');
  function calc(e: React.MouseEvent) {
    const target: EventTarget = e.target;

    if ((target as HTMLElement).innerText === '=') {
      setInput(`${eval(input)}`);
    
    } else if ((target as HTMLElement).innerText === 'AC') {
      setInput('');
    } else if ((target as HTMLElement).innerText === 'x') {
      setInput(input + '*');
    } else if ((target as HTMLElement).innerText === '÷') {
      setInput(input + '/');
    } else if ((target as HTMLElement).tagName === 'BUTTON') {
      setInput(input + (target as HTMLElement).innerText);
    }
  
  }
  useEffect(() => {
    dispatch({type:"UPDATE_DISPLAY",payload:input}) 
  }, [input]);
  return (
    <div className="form">
      <div className="col1">
        <button
          className="col1-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          +
        </button>
        <button
          className="col1-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          7
        </button>
        <button
          className="col1-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          4
        </button>
        <button
          className="col1-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          1
        </button>
        <button
          className="col1-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          0
        </button>
      </div>
      <div className="col2">
        <button
          className="col2-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          -
        </button>
        <button
          className="col2-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          8
        </button>
        <button
          className="col2-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          5
        </button>
        <button
          className="col2-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          2
        </button>
        <button
          className="col2-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          .
        </button>
      </div>
      <div className="col3">
        <button
          className="col3-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          x
        </button>
        <button
          className="col3-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          9
        </button>
        <button
          className="col3-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          6
        </button>
        <button
          className="col3-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          3
        </button>
        <button
          className="col3-item col-item clear"
          onClick={(e) => {
            calc(e);
          }}
        >
          {' '}
          AC
        </button>
      </div>
      <div className="col4">
        <button
          className="col4-item col-item"
          onClick={(e) => {
            calc(e);
          }}
        >
          &#xF7;
        </button>
        <button
          className="col4-item col-item equal"
          onClick={(e) => {
            calc(e);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Form;
