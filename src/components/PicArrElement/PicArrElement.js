import React from 'react';
import Tilt from 'react-tilt'

const PicArrElement = ({ AnPictureArray }) => {
    return (
        <div >
            <Tilt className="PicContainer Tilt options={{ max : 55 }} style={{ height: 250, width: 250 }}">
                <div className="Tilt-inner">
                <img alt={'FindFace in '+AnPictureArray} src={AnPictureArray}/>
                </div>
            </Tilt>
        </div>
  );
}

export default PicArrElement;