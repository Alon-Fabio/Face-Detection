import React from 'react';
import Logo from '../Logo/Logo'
import './PicLibrary.css';
import PicArrElement from '../PicArrElement/PicArrElement';

function PicLibrary({PictureArray}) {
    return (
        <div className="PicLibrary">
            <div className="LogoPicLibrary" >
                <Logo />
            </div>
            <ul className="PicArrLibrary" >
                {
                    PictureArray.map((pic, i) => {
                        return (
                            <PicArrElement
                            AnPictureArray={pic}
                            PicAlt={i}
                            key={i}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
  
}

export default PicLibrary;