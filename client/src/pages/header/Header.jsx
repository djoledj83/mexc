import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import logo_v from '../../assets/milos.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="naslov__text">T-4 Trade for me <span className='span__text'><br />AI Tradeing</span> automate.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, eum excepturi sequi dolorum laudantium quibusdam est corrupti eius distinctio deleniti ipsum et officia id ea quo totam non aspernatur? Omnis provident eum eligendi, cum explicabo deserunt vel, iste eos consectetur temporibus nemo! Porro magni, nihil sint expedita nostrum voluptatem. Iste!</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Please enter your email' />
                    <button type='button'>Join us</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt='people' />
                    <p>Become a part of success...</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={logo_v} alt="glavna slika" />
            </div>

        </div>
    )
}

export default Header;
