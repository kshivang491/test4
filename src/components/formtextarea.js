// src/components/FormTextarea.js
import React from 'react';

const FormTextarea = ({ id, label, labelclass, inputclass, value, onChange, placeholder, required }) => {
  return (
    <>
      <label htmlFor={id} className={labelclass}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={inputclass}
      />
    </>
  );
};


export default FormTextarea;
