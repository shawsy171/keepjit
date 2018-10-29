import React from 'react';
import PropTypes from 'prop-types';

interface Card {
  question: string,
  answer: string
}

const Card = ({ question, answer }: Card) => {
  return (
    <div>
      <p>
        <b>Question:</b> {question}
        <br/>
        <b>Answer:</b> {answer}
      </p>
    </div>
  )
}

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

export default Card

