import React from 'react';
import { FooterContentSt, FooterSt } from './Footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <FooterSt>
      <FooterContentSt>
        <p>Copyright {date.getFullYear()}</p>
      </FooterContentSt>
    </FooterSt>
  )
}

export default Footer;