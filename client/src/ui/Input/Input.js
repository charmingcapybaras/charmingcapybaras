/* 
  Input.js
  @author: Daren Lunsford
  @description: Defining each type of form component to allow form re-use
*/

import React from 'react';

const input = props => {
  let inputElement = null;
  // Setup the different form components depicted by the element type
  if (props.elementType === 'input') {
    inputElement = (
      <input
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed}
        value={props.value}
        className="form-control"
      />
    );
  } else if (props.elementType === 'textarea') {
    inputElement = (
      <textarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        className="form-control"
      />
    );
  } else if (props.elementType === 'select') {
    inputElement = (
      <select
        value={props.value}
        onChange={props.changed}
        className="form-control"
      >
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
