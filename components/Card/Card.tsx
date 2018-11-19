import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

// styles
import { ContainerSt, CardSt, CardFront, CardBack } from './Card.styles';

// misc
import config from '../../config/config';

interface Card {
  id: string,
  question: string,
  answer: string
}

const Card = ({ question, answer, id }: Card) => {
  const removeCard = async (id: string): Promise<void> => {
    const res = await fetch(config.API_URL + '/remove-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    });
  }

  return (
    <ContainerSt>
      <CardSt>

        <CardFront>
          {question}
        </CardFront>

        <CardBack>
          {answer}
        </CardBack>

      </CardSt>
      <button onClick={() => removeCard(id)}>remove card</button>
      {/* <button onClick={() => editCard()}>edit card</button> */}
      <Link href={`/edit/${id}`}>
        <button>edit card</button>
      </Link>
    </ContainerSt>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

export default Card

