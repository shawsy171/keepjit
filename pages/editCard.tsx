import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

// components
import Form from '../components/Form/Form';
import Nav from '../components/Nav/Nav';
import Page from './../layouts/main';

const DEFAULT_STATE = { front: '', back: '', links: '', id: '' };

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

    const { front, back, links } = await res.json();
    this.setState(() => ({ front, back, links }))
  }

  render () {
    const { front, back, links } = this.state
    return (
      <Page>
        <div>
          <Form
            handleSubmit={this.handleSubmit}
            front={front}
            back={back}
            links={links}
          />
        </div>
      </Page>
    )
  }
}


export default EditCard;
