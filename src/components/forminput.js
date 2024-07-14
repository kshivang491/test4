// src/components/FormInput.js
import React from 'react';

const FormInput = ({ id, label, labelclass, inputclass, type = 'text', value, onChange, placeholder, required }) => {
  return (
    <>
      <label htmlFor={id} className={labelclass}>{label}</label>
      <input
        type={type}
        id={id}
        className={inputclass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        />
        </>
  );
};


export default FormInput;
