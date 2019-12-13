import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt'

function Logo() {
  return (
    <Tilt className="Logo Tilt options={{ max : 55 }} style={{ height: 250, width: 250 }}">
      <div className="Tilt-inner">
          <img alt="Logo" src={require("./laugh.png")}></img>
      </div>
    </Tilt>
  );
}

export default Logo;