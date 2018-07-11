import React, { InputHTMLAttributes } from 'react';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
}
class Form extends React.Component {
  state = {
    message: 'hewwo',
    input: ''
  }

  handleInputChange = (e: HTMLElementEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // const input = (e.target as HTMLInputElement);
    const input = e.currentTarget;
    this.setState(() => ({
      message: input.value
    }))
  }

  render () {
    return (
      <div>
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
      </div>
    )
  }
}

export default Form;