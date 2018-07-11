import React, { InputHTMLAttributes } from 'react';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
}

interface FormControlEventTarget extends EventTarget{
  value: string;
}
class Form extends React.Component {
  state = {
    message: 'hewwo',
    input: ''
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = (e.target as FormControlEventTarget);
    this.setState(() => ({
      message: input.value
    }))
  }

  render () {
    return (
      <form>
        <label>
          <span>Title</span>
          <input 
            type="text"
            id='title'
            value={this.state.input} 
            onChange={this.handleInputChange}
          />
          <p>{this.state.message}</p>
        </label>
      </form>
    )
  }
}

export default Form;