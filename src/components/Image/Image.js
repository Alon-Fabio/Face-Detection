import React from 'react';
import './Image.css';

function Image({Pic}) {
    return(
        <div className="Image">
            <img alt="" src={Pic} ></img>
        </div>
    );
}
export default Image;