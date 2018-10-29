import React from 'react';
import fetch from 'isomorphic-unfetch';
import config from './../config/config';

// components
import Nav from './../src/client/components/Nav/Nav';
import Card from './../src/client/components/Card/Card';

// styles
import { TitleSt } from './styles/index';

// interfaces
import {
  StatelessPage,
  IndexProps
} from './interfaces/index';

const Index : StatelessPage<IndexProps> = (props : IndexProps) : JSX.Element => {
  return (
    <div>
      <TitleSt>Welcome to keepJit</TitleSt>
      <Nav />
      {props.cards.map((card, idx) => (
        <Card 
          key={idx} 
          question={card.front} 
          answer={card.back} 
        />
      ))}
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