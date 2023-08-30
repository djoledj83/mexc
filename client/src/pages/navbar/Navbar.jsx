import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { ReactComponent as Logo } from "../../assets/logo_p.svg";
import "./navbar.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Menu = () => (
    <>
        {/* <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">Why me?</a>
    </p>
    <p>
      <a href="#features">I'm offering</a>
    </p>
    <p>
      <a href="#possibility">My Work</a>
    </p>
    <p>
      <a href="#blog">Contact</a>
    </p> */}
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <Logo className="logo" width="35%" height="30%" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>
                    <div>
                        <button><Link to="/signup">Get in</Link></button>

                    </div>
                </p>
                <p><Link to="/login">Sign in</Link></p>
                {/* <button type="button">Sign in</button> */}
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p><Link to="/login">Sign in</Link></p>
                                <button><Link to="/signup">Get in</Link></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
