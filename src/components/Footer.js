import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import Pagedoll from './Pagedoll';

const Footer = () => {
  return (
    <footer className="bg-footer border-t-2 border-white p-6 text-center">
      <p className="text-white">&#10047; Copyright &#169; 2024 Tina Cui </p>
      <Pagedoll />
    </footer>

    
  );

};

export default Footer;
