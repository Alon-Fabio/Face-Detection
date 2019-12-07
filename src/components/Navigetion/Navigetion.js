import React from 'react';
import './Navigetion.css';
import Tilt from 'react-tilt'

function Navigetion() {
  return (
    <Tilt className="Navigetion Tilt options={{ max : 55 }} style={{ height: 250, width: 250 }}">
      <h1 className="NavEl Tilt-inner">{'Sing-in'}</h1>
    </Tilt>
  );
}

export default Navigetion;
