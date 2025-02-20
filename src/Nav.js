import React, { useState, useEffect} from 'react';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = ()=> {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return ()=> window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
                className="nav__logo"
                src="https://netflix-clone-asset.s3.ap-south-1.amazonaws.com/asset/logo.png"
                alt="netflix__logo"
            />

            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="netflix__avatar"
            />
            </div>
        </div>
    )
}

export default Nav;
