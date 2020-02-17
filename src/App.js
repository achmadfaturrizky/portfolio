import React from 'react';
import logo from './image.png';
import './App.css';

const desc = 'Trainer full stack developer yang berdedikasi tinggi mengajarkan teknologi terbaru dalam dunia pemrograman. Berpengalaman dalam mengembangkan aplikasi mobile menggunakan react native, react, express js maupun node js untuk back end. Mampu bekerja dalam team, mampu bekerja remote maupun onsite, serta selalu tertarik akan perkembangan UI/UX design.';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={logo} alt="avatar" className="image" />
        <div className="title">Achmad Fatur Rizky</div>
        <div className="text">React Native Developer</div>
        <div className="textDesc">{desc}</div>
        <div className="contentButton">
          <button className="button">Portfolio</button>
          <button className="button">CV</button>
        </div>
      </div>
    </div>
  );
}

export default App;
