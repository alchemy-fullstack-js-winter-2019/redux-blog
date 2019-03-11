import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.animate}>Home</Link>
      <Link to="/users" className={styles.animate}>Users</Link>
    </div>
  );
}
