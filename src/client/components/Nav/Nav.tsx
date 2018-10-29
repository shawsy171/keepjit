import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Nav() {
  return (
    <div>
      <Link href="/addCard">
        <a>Add Card</a>
      </Link>
    </div>
  )
}

Nav.propTypes = {

}

export default Nav;

