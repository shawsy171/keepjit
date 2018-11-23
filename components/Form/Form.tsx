import React from 'react';

// components
import TextInput from '../TextInput/TextInput';

// styles
import { FormSt, TextareaSt } from './Form.styles'

//interfaces
import { FormControlEventTarget } from './interfaces';

interface Props {
  front?: string;
  back?: string;
  links?: string;
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
    type: '',
    links: ''
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.front !== this.props.front) {
      this.setState(() => ({
        front: nextProps.front,
        back: nextProps.back,
        links: nextProps.links
      }))
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
    const { back, front, tags, type, links } = this.state;

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

        <TextInput
          name="links"
          value={links}
          InputChange={e => this.handleInputChange(e, 'links')}
        />

        <label>
          <span>Answer</span>
          <TextareaSt
            name="back"
            id=""
            cols={100}
            rows={10}
            wrap="off"
            value={back}
            onChange={this.handleTextAreaChange}
          >
          </TextareaSt>
        </label>
        <input type="submit" value="Submit" />
      </FormSt>
    )
  }
}

export default Form;
