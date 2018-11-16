import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from './../config/config';

// components
import Nav from './../components/Nav/Nav';
import Card from './../components/Card/Card';

// interfaces
import {
  StatelessPage,
  IndexProps
} from './interfaces/index';

const Index : StatelessPage<IndexProps> = ({ cards } : IndexProps) : JSX.Element => {
  return (
    <div>
      <Nav />
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={card._id}
          question={card.front}
          answer={card.back}
        />
      ))}
    </div>
  )
}

Index.getInitialProps = async () => {

  const res = await fetch(config.API_URL + '/cards');
  const data = await res.json();

  return {
    cards: data
  }
}

export default Index;