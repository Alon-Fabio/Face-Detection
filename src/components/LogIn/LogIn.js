import React from 'react';
import './logIn.css';

const UserInfo = ({UserInfoObj}) => {
    return(
        <div className="logIn">
            <form>
                <p>Name <input type="text" placeholder={"Your name"} ></input></p>
                <p>Name <input type="email" placeholder={"Your Email"} ></input></p>
            </form>
        </div>
    );
}

export default logIn;