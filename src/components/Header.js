import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './app/App.css';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/users/1">Example User</Link>
      <Link to="/posts/1">Example Post</Link>
    </nav>
  );
}

export default Header;
