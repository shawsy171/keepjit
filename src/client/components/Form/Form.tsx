import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../../../../config/config';

// components
import TextInput from '../TextInput/TextInput';

//interfaces
import { HTMLElementEvent, FormControlEventTarget } from './interfaces';
class Form extends React.Component {
  state = {
    question: '',
    answer: '',
    tags: '',
    type: ''
  }
  
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

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputType: string): void => {
    const input = (e.target as FormControlEventTarget);
    
    this.setState(() => ({
      [inputType]: input.value
    }))
  }

  handleTextAreaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = (e.target as FormControlEventTarget);
    this.setState(() => ({
      answer: input.value
    }))
  }

  render () {
    const { answer, question, tags, type } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput 
          name="Question / Front"
          value={question}
          InputChange={e => this.handleInputChange(e, 'question')}
        />

        <TextInput 
          name="Card Type"
          value={type}
          InputChange={e => this.handleInputChange(e, 'type')}
        />

        <TextInput 
          name="tags"
          value={tags}
          InputChange={e => this.handleInputChange(e, 'tags')}
        />

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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;


// "front": "What is a uncontrolled input (react)",
  //   "back": [],
  //   "date": "06 may 2018",
  //   "links": [],
  //   "image": "image.jpg",
  //   "tags": ["javascript", "react"]