import React from 'react';
import Form from '../src/client/components/Form/Form';
import fetch from 'isomorphic-unfetch';
import config from './../config/config';

import {
  StatelessPage,
  IndexProps
} from './interfaces/index';

const Index : StatelessPage<IndexProps> = (props : IndexProps) : JSX.Element => {
  return (
    <div>
      <h1>Welcome to keepJit</h1>
      {props.cards.map((card, idx) => (
        <p key={idx}>
          <b>front:</b> {card.front}
          <br/>
          <b>Back:</b> {card.back}
        </p>
      ))}
      <Form />
    </div>
  )
}

// turn this in to arrow function
Index.getInitialProps = async function() {

  const res = await fetch(config.API_URL + '/cards');
  const data = await res.json();

  return {
    cards: data
  }
}


export default Index;