import React from "react";

const Form = ({ type, name, value, handleChange, lableText }) => {
  return (
    <div className="form-components">
      <label htmlFor={name} className="form-lable">
        {lableText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      ></input>
    </div>
  );
};

export default Form;
