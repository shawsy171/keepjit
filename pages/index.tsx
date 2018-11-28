import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from '../config/config';

// components
import Card from '../components/Card/Card';
import ButtonNav from '../components/ButtonNav/ButtonNav';
import Page from '../layouts/main';
// interfaces
import {
  StatelessPage,
  IndexProps
} from './interfaces/index';

const Index : StatelessPage<IndexProps> = ({ cards } : IndexProps) : JSX.Element => {
  const card = cards[0]
  return (
    <Page>
      <Card
        key={1}
        id={card._id}
        question={card.front}
        answer={card.back}
      />
      <ButtonNav />
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