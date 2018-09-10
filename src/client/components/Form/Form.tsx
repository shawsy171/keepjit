import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../../../../config/config';

// components
import TextInput from '../TextInput/TextInput';

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
  // "front": "What is a uncontrolled input (react)",
  //   "back": [],
  //   "date": "06 may 2018",
  //   "links": [],
  //   "image": "image.jpg",
  //   "tags": ["javascript", "react"]
  handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log('A Question was submitted: ' + this.state.question);

      const res = await fetch(config.API_URL + '/add-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      // const data = await res.json();

    // console.log(`Show data fetched. Count: ${data}`)
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
      <form onSubmit={this.handleSubmit}>
        <TextInput 
          name="Question / Front"
          value={question}
          InputChange={this.handleInputChange}
        />
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;