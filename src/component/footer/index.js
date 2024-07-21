import React from 'react';
import './styles.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;