import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import showdown from 'showdown';
import hljs from 'highlight.js';
// TODO: need to work out how to abstract style JSX
import hljsCss from '../../styles/highlightjs';

// styles
import { ContainerSt, CardSt, CardFront, CardBack } from './Card.styles';

// misc
import config from '../../config/config';

interface CardProps {
  id: string,
  question: string,
  answer: string
}

class Card extends Component<CardProps> {
  state = {
    showBack: false
  }

  removeCard = async (id: string): Promise<void> => {
    const res = await fetch(config.API_URL + '/remove-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    });

    console.log({ res });
  }

  handleClick = () => {
    this.setState((prevState) => ({ showBack: !this.state.showBack }));
    console.log(this.state.showBack)
  }

  render() {
    const { question, answer, id } = this.props;
    const { showBack } = this.state
    const converter = new showdown.Converter();
     // const convertedText = converter.makeHtml(Array.isArray(answer) ? answer.join() : answer);
    const stringifiedAnswer = Array.isArray(answer) ? answer.join() : answer;
    const convertedText = hljs.highlight("javascript", stringifiedAnswer).value;

    // console.log(answer);
    // console.log(hljs.highlight("javascript", stringifiedAnswer).value);
    return (
      <ContainerSt>
      <CardSt
        // @ts-ignore
        showBack={showBack}
        onClick={this.handleClick}>

        <CardFront>
          {question}
        </CardFront>

        <CardBack>
          {/* {converter.makeHtml(Array.isArray(answer) ? answer.join() : answer)} */}
          <pre>
            {/* {hljs.highlightBlock(Array.isArray(answer) ? answer.join() : answer)} */}
            {/* {hljs.highlightAuto('this is a js')} */}
            {/* {answer} */}
            <div dangerouslySetInnerHTML={{__html: convertedText}}></div>
          </pre>
        </CardBack>

      </CardSt>
      <button onClick={() => this.removeCard(id)}>remove card</button>
      {/* <button onClick={() => editCard()}>edit card</button> */}
      <Link href={`/edit/${id}`}>
        <button>edit card</button>
      </Link>

    </ContainerSt>
    )
  }
}

// Card.propTypes = {
//   id: PropTypes.string,
//   question: PropTypes.string,
//   answer: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array
//   ]),
// }

export default Card

