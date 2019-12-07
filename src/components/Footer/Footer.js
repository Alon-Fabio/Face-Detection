import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="Footer">
            <div className="FooterContainer">
                <div className="Credit">
                    <p>
                    {"Logo Icon made by "}
                    <a href="https://www.flaticon.com/authors/freepik">{"Freepik"}</a>
                    {" from "}
                    <a href="www.flaticon.com">{"www.flaticon.com"}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;