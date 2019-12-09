import React from 'react';
import './Fetcher.css';

function Fetcher({GetInput, ChangePicUrl}) {

    return(
        <div className="Fetcher">
            <input type="text" onChange={GetInput}></input>
            <button type="submit" onClick={ChangePicUrl}>{"Scene picture"}</button>
            
        </div>
    );
}
export default Fetcher;