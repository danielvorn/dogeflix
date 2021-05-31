import React, {useEffect, useState} from 'react';
import DogeflixLogo from "../assets/futureisdoge.png";
import Avatar from "../assets/avatar.png";
import '../styles/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img
                src={DogeflixLogo}
                alt="Dogeflix Logo"
                className="navLogo"
            />
            <img
                src={Avatar}
                alt="Avatar"
                className="navAvatar"
            />
        </div>
    );
}

export default Nav;