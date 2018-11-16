import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../config/config';

// components
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import Page from '../layouts/main';

// interfaces
import {
  StatelessPage,
  IndexProps
} from './interfaces/index';

const Index : StatelessPage<IndexProps> = ({ cards } : IndexProps) : JSX.Element => {
  return (
    <Page>
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={card._id}
          question={card.front}
          answer={card.back}
        />
      ))}
    </Page>
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