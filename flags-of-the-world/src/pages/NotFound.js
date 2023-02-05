import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Erreur page 404</h1>
    </div>
  );
};

export default NotFound;