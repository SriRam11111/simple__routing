import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react">React</Link>
        <Link to='/angular'>Angular</Link>
        <Link to='/node'>Node</Link>
        </nav>
    </div>
  )
}

export default Navbar