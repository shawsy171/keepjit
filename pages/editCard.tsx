import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

// components
import Form from '../src/client/components/Form/Form';
import Nav from '../src/client/components/Nav/Nav';

const DEFAULT_STATE = { front: '', back: '', id: '' };

class EditCard extends Component {
  state = DEFAULT_STATE;

  handleSubmit = async (event: any, newCard: any) => {
    event.preventDefault();

      const res = await fetch(config.API_URL + '/edit-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...newCard, ...{ id: this.state.id }})
      });
  }

  async componentDidMount () {
    const paths: string[] = window.location.pathname.split('/')
    const last = paths.length - 1
    const id = paths[last];

    this.setState(() => ({ id }))

    const res = await fetch(`${config.API_URL}/find-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })

    const { front, back } = await res.json();
    this.setState(() => ({ front, back }))
  }

  render () {
    const { front, back } = this.state
    return (
      <div>
        <Nav />
        <Form
          handleSubmit={this.handleSubmit}
          front={front}
          back={back}
        />
      </div>
    )
  }
}

// EditCard.propTypes = {

// }

export default EditCard;
