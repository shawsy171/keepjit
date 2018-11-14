import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

// components
import Form from '../src/client/components/Form/Form';
import Nav from '../src/client/components/Nav/Nav';

const DEFAULT_STATE = { front: '', back: '' };

class EditCard extends Component {
  state = DEFAULT_STATE;

  async componentDidMount () {
    const id = window.location.pathname.split('/')[2];

    const res = await fetch(`${config.API_URL}/find-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })

    const { front, back } = await res.json();
    this.setState(() => ({ front, back }))
    console.log({ front, back });
  }
  render () {
    const { front, back } = this.state
    return (
      <div>
        <Nav />
        <Form front={front}/>
      </div>
    )
  }
}

// EditCard.propTypes = {

// }

export default EditCard;
