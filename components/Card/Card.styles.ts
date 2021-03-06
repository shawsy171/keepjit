import styled from 'styled-components';
import { offWhiteBlue } from '../../styles/colors';

// styles
import { family, size } from '../../styles/fonts';

// what does perspective: 600px; do?
export const ContainerSt = styled.div`
  margin: 0 auto 10px;
  max-width: 50%;
  perspective: 1000px;
  position: relative;
`;

export const CardSt = styled.div`
  font-family: ${family.cardFont};
  font-size: ${size.md};
  box-shadow: 5px 5px 6px 1px rgba(0,0,0,0.25);

  width: 100%;
  // @ts-ignore
  padding-bottom: ${props => props.showBack ? '100%' : '25%'}; // hax for height
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  // @ts-ignore
  transform: ${props => props.showBack ? 'rotateY( 180deg );' : ''};
`;

const CardPanels = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardFront = styled(CardPanels)`
  background-color: ${offWhiteBlue};
  text-align: center;
  font-size: ${size.lg};
`;

export const CardBack = styled(CardPanels)`
  color: hsl(220, 14%, 71%);
  max-width: 100%;
  background-color: hsl(220, 13%, 18%);
  transform: rotateY( 180deg );

  & pre {
    white-space: pre-wrap;
  }
`;

export const CardBackContent = styled