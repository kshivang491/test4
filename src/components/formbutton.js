// src/components/FormButton.js
import React from 'react';

const FormButton = ({ type, text, onClick, className }) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};


export default FormButton;
