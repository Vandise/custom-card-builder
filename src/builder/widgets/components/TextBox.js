import React from 'react';

export default ({ label, placeholder, autofocus, maxlength }) => {
  return (
    <label htmlFor={`input-field-${label}`}>
      <span className='widget-label'>{label}</span>
      <input type='text' id={`input-field-${label}`} placeholder={placeholder} maxLength={maxlength} />
    </label>
  );
};