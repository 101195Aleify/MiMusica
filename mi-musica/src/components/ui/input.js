// src/components/input.js
import React from 'react';

export function Input({ type, accept, multiple, onChange }) {
  return (
    <input 
      type={type} 
      accept={accept} 
      multiple={multiple} 
      onChange={onChange} 
      className="px-4 py-2 border rounded-md"
    />
  );
}
