import React from 'react';
import './Navigetion.css';

function Navigetion({ShowFace}) {
  return (
    <div className="Navigetion ">
      <h1 onClick={ShowFace} className="NavEl ">{'Sing-in'}</h1>
    </div>
  );
}

export default Navigetion;
