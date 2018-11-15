import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/config';

// components
import Form from '../src/client/components/Form/Form';
import Nav from '../src/client/components/Nav/Nav';

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
    <div>
      <Nav />
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

addCard.propTypes = {

}

export default addCard

