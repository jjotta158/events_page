import React from 'react';
import "./style.css"    

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={require("../../assets/images/logo.png")}></img>
            </div>
            <div>
                <span>lottaleben</span>
            </div>
        </footer>
    )
}

export default Footer;