import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home, AjustWebcam, SessionInProgress, Bilan, Datas, Test, Test2 } from './pages';

function App() {

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <header className="site-header">
          <Link to="/">
            Emotion data
          </Link>
          <Link to="/ajustWebcam">
            Ajustement webcam
          </Link>
          <Link to="/datas">
            Datas
          </Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/ajustWebcam" element={<AjustWebcam />} />
            <Route path='/sessionInProgress' element={<SessionInProgress />} />
            <Route path='/test' element={<Test />} />
            <Route path='/test2' element={<Test2 />} />
            <Route path='/bilan' element={<Bilan />} />
            <Route path='/datas' element={<Datas />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>
            Site conçu et développé par
            <a href="https://www.lamanu.fr">La Manu</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
