import React from 'react';
import Tilt from 'react-tilt'

const PicArrElement = ({ AnPictureArray, PicAlt }) => {

    return (
        <li key={PicAlt}>
            <Tilt className="PicContainer Tilt options={{ max : 55 }} style={{ height: 250, width: 250 }}">
            <img  className="Tilt-inner"
                 alt={PicAlt} src={AnPictureArray}
                 />
            </Tilt>
        </li>
  );
}

export default PicArrElement;