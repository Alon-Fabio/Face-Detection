import React from 'react';
import './PicLibrary.css';
import PicArrElement from '../PicArrElement/PicArrElement';

function PicLibrary({PictureArray}) {
    return (
        <div className="PicLibrary">
            {
                PictureArray.map((pic, i) => {
                    return (
                        <PicArrElement
                        AnPictureArray={pic}
                        />
                    )
                })
            }
        </div>
    );
  
}

export default PicLibrary;