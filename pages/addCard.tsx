import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

// components
import Form from '../components/Form/Form';
import Page from './../layouts/main';

function addCard() {

  const handleSubmit = async (event: any, newCard: any) => {
    event.preventDefault();

      const res = await fetch(config.API_URL + '/add-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCard)
      });
  }

  return (
    <Page>
      <div>
        <Form handleSubmit={handleSubmit}/>
      </div>
    </Page>
  )
}

addCard.propTypes = {

}

export default addCard

