import React from 'react';
import Link from 'next/link';

// styles
import { NavSt, ContentSt, LinkSt } from './Nav.styles';

function Nav() {
  return (
    <NavSt>
      <ContentSt>
        <Link href="/index">
          <LinkSt>Home</LinkSt>
        </Link>
        <Link href="/addCard">
          <LinkSt>Add Card</LinkSt>
        </Link>
        <Link href="/list">
          <LinkSt>List Cards</LinkSt>
        </Link>
      </ContentSt>
    </NavSt>
  )
}

export default Nav;

