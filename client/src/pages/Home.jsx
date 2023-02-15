import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='site-content'>
      <h1>Bienvenue sur Emotion Data</h1>
      <p>Nous vous proposons de découvrir le monde de la data, en participant à une petite expérience qui ne
        vous prendra que quelques minutes. Vous allez visionner quelques séquences vidéo, durant lesquelles
        une AI
        va essayer de deviner votre état émotionnel en temps réel, et stocker cette information dans une
        base de
        données.
      </p>

      <p>
        Seules les données de l'état émotionnel sont conservées.
      </p>
      <p className="text-center">
        <Link to="/ajustWebcam" className='btn'>
          Commencer l'expérience
        </Link>
      </p>
    </div>
  )
}

export default Home