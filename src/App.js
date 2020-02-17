import React from 'react';
import logo from './image.png';
import './App.css';
import { useMediaQuery } from 'react-responsive'

const desc = 'Trainer full stack developer yang berdedikasi tinggi mengajarkan teknologi terbaru dalam dunia pemrograman. Berpengalaman dalam mengembangkan aplikasi mobile menggunakan react native, react, express js maupun node js untuk back end. Mampu bekerja dalam team, mampu bekerja remote maupun onsite, serta selalu tertarik akan perkembangan UI/UX design.';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function App() {
  return (
    <div>
      <Desktop>
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
      </Desktop>
      <Mobile>Comming Soon</Mobile>
      <Tablet>Comming Soon</Tablet>
    </div>
  );
}

export default App;
