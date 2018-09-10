import React from 'react';
import PropTypes from 'prop-types';

interface TextInputProps {
  name: string;
  value: string;
  InputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.SFC<TextInputProps> = ({ name, value, InputChange }) => {
  return (
    <label>
      <span>{name}</span>
      <input 
        type="text"
        value={value}
        onChange={InputChange}
      />
      <p>{value ? value : "hello im not being used message"}</p>
    </label>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired
}

export default TextInput;
