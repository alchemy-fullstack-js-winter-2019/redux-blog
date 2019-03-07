import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';




export default function Header() {
  return (
    <nav>
      <Link to='/home'> Home </ Link>
    </nav>
  );
}
