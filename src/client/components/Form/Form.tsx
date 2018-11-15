import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../../../../config/config';

// components
import TextInput from '../TextInput/TextInput';

// styles
import { FormSt } from './Form.styles'

//interfaces
import { FormControlEventTarget } from './interfaces';

interface Props {
  front?: string;
  back?: string;
  handleSubmit: (event: any, newCard: any) => void
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
      this.setState(() => ({ front: nextProps.front, back: nextProps.back }))
    }
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
      <FormSt
        className="form"
        onSubmit={(event) => this.props.handleSubmit(event, this.state)}
      >
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
