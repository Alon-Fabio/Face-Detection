import React from 'react';
import './UserInfo.css';

const UserInfo = ({UserInfoObj}) => {
    return(
        <div className="UserInfo">
            <div className="LoginBody">
                <h1>{`Hello ${UserInfoObj.UserName}`}</h1>
                <p>{"Upload your picture"}</p>
                <p>{`This is your ${UserInfoObj.NumberOfUp}th time`}</p>
            </div>
        </div>
    );
}

export default UserInfo;