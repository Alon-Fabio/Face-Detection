import React from 'react';
import './PicLibrary.css';
import Tilt from 'react-tilt'

function PicLibrary() {
  return (
        <div className="PicLibrary">
            <Tilt className="Tilt options={{ max : 55 }} style={{ height: 250, width: 250 }}">
                <div className="Tilt-inner">
                    <p>{"test"}</p>
                </div>
            </Tilt>
        </div>
  );
}

export default PicLibrary;