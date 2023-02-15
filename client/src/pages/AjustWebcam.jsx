import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../components';

function AjustWebcam() {
  return (
    <main className="site-content">
      <h1>Ajustement de la webcam</h1>
      <p>Placez-vous devant l'ordinateur de façon à ce que la webcam puisse voir tout votre visage. Vous allez
        constater que l'Ai peut déjà lire vos expressions.</p>
      <div className="text-center">
        <div className="video-wrapper">
          <div className="emoticon-wrapper">
            &#128512;
          </div>
          <Video />
        </div>
      </div>
      <p className="text-center">
        <Link to="/sessionInProgress" className='btn'>
          Suite du parcours
        </Link>
      </p>
    </main>
  )
}

export default AjustWebcam