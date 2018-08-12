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
    message: 'default message',
    question: '',
    answer: ''
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = (e.target as FormControlEventTarget);
    this.setState(() => ({
      question: input.value
    }))
  }

  handleTextAreaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = (e.target as FormControlEventTarget);
    this.setState(() => ({
      answer: input.value
    }))
  }

  render () {
    const { answer, question, message } = this.state;
    return (
      <form>
        <label>
          <span>Question</span>
          <input 
            type="text"
            id='title'
            value={question}
            onChange={this.handleInputChange}
          />
          <p>{question ? question : message}</p>
        </label>
        <br/>

        <label>
          <span>Main Tag*</span>
          <input type="text" />
        </label>
        <br/>

        <label>
          <span>Tags</span>
          <input type="text" />
        </label>
        <br/>

        <label>
          <span>Answer</span>
          <textarea 
            name="answer" 
            id="" 
            cols={30}
            rows={10}
            value={answer}
            onChange={this.handleTextAreaChange}
          >
          </textarea>
        </label>
        <p>{answer}</p>

      </form>
    )
  }
}

export default Form;