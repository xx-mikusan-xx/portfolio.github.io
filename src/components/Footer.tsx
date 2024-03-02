import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        <p>&copy; 2024 mikusan</p>
      </div>
    </footer>
  );
};

export default Footer;
