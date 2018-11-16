import React from 'react';
import Link from 'next/link';

// styles
import { NavSt } from './Nav.styles';

function Nav() {
  return (
    <NavSt>
      <Link href="/index">
        <a>Home</a>
      </Link>
      <Link href="/addCard">
        <a>Add Card</a>
      </Link>
    </NavSt>
  )
}

export default Nav;

