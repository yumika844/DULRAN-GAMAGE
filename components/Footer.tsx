
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <p>&copy; {currentYear} AL COMBINED MATHS PAPER HUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
