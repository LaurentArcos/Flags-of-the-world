import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Erreur page 404</h1>
      <Link to="/">
          <button>Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default NotFound;