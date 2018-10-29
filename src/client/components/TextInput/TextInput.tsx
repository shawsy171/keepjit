import React from 'react';
import PropTypes from 'prop-types';

// styles
import { InputLabelSt, InputSt } from './TextInput.styles';

interface TextInputProps {
  name: string;
  value: string;
  InputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.SFC<TextInputProps> = ({ name, value, InputChange }) => {
  return (
    <InputLabelSt>
      <span>{name}</span>
      <InputSt 
        type="text"
        value={value}
        onChange={InputChange}
      />
    </InputLabelSt>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired
}

export default TextInput;
