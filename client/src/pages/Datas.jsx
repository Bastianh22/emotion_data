import React from 'react';

import { Link } from 'react-router-dom';

const Datas = () => {
  return (
    <main className="site-content">
      <h1>Données consolidées sur 32 sessions</h1>
      <p className="session-results-overview text-center">Sur l'ensemble des extraits, voici les émotions que l'AI a
        détecté :<br />
        &#128552; : 8'25" / &#128533; : 4'48" / &#128512; : 2'12"
      </p>
      <div className="session-results mb">
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
        <div className="result-item">
          <h2 className="movie">Alien, le huitième passager</h2>
          <ol className="data-resume">
            <li>
              <span>&#128552; :</span>
              <progress id="file" max="100" value="70"> 70% </progress>
            </li>
            <li>
              <span>&#128533; :</span>
              <progress id="file" max="100" value="30"> 30% </progress>
            </li>
            <li>
              <span>&#128512; :</span>
              <progress id="file" max="100" value="10"> 10% </progress>
            </li>
          </ol>
        </div>
      </div>
      <p className="text-center">
        <Link to="/" className='btn'>
          Rejouer
        </Link>
      </p>
    </main>
  )
}

export default Datas