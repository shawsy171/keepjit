import React from 'react';
import PropTypes from 'prop-types';

// components
import Form from '../src/client/components/Form/Form';
import Nav from '../src/client/components/Nav/Nav';

function addCard() {
  return (
    <div>
      <Nav />
      <Form />
    </div>
  )
}

addCard.propTypes = {

}

export default addCard

