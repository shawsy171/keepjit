import styled from 'styled-components';
import bp from '../../styles/breakpoints';
import { size, family } from '../../styles/fonts';
import { SkyBlue, white } from '../../styles/colors';

export const NavSt = styled.div`
  background-color: ${SkyBlue};
  margin-bottom: 30px;
`;

export const ContentSt = styled.div`
  margin: 0 auto;
  max-width: ${bp.xl};
  padding: 30px 30px;
`;

export const LinkSt = styled.a`
  padding: 12px 8px;
  color: ${white};
  cursor: pointer;
  font-size: ${size.lg};
  font-family: ${family.header};
  margin-right: 10px;
`;