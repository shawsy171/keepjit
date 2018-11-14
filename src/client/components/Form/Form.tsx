import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../../../../config/config';

// components
import TextInput from '../TextInput/TextInput';

// styles
import { FormSt } from './Form.styles'

//interfaces
import { HTMLElementEvent, FormControlEventTarget } from './interfaces';

interface Props {
  front?: string
}

class Form extends React.Component<Props> {
  static defaultProps = {
    front: ''
  }

  state = {
    front: '',
    back: '',
    tags: '',
    type: ''
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.front !== this.props.front) {
      this.setState(() => ({ front: nextProps.front }))
    }
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log('A Question was submitted: ' + this.state.front);

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

  handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const input = (e.target as FormControlEventTarget);
    this.setState(() => ({
      back: input.value
    }))
  }

  render () {
    const { back, front, tags, type } = this.state;

    return (
      <FormSt onSubmit={this.handleSubmit}>
        <TextInput
          name="Question / Front"
          value={front}
          InputChange={e => this.handleInputChange(e, 'front')}
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
            name="back"
            id=""
            cols={30}
            rows={10}
            value={back}
            onChange={this.handleTextAreaChange}
          >
          </textarea>
        </label>
        <input type="submit" value="Submit" />
      </FormSt>
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