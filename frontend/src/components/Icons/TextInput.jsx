import React from 'react'
import './Input.css'

const TextInput = ({ label, placeholder, className, onChange }) => {
  return (
    <div className={`text-input-group ${className}`}>
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="text-input"
        id={label}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput
