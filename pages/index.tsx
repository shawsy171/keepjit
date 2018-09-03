import React from 'react';
import Form from './../src/client/components/Form';
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

  const res = await fetch(config.API_URL + '/tours');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${JSON.stringify(data, null, 2)}`)

  return {
    cards: data
  }
}


export default Index;