import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo_p.svg';
import './possibility.css';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <Logo fill="blue" width="100%" height="100%" />
            </div>
            <div className='gpt3__possibility-content'>
                {/* <h4>Sometimes some work is irreversible</h4> */}
                <h1 className='naslov__text'>More about us?<br />
                    Lets get in touch.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae beatae recusandae dolor quae eaque, numquam repudiandae libero, voluptates ad quis unde amet? Minus accusantium dolore alias laboriosam libero cumque?</p>
                <h4>Send us a message:<a href='mailto:info@weifert.ch'> info@t-4.me</a></h4>
            </div>
        </div>
    )
}

export default Possibility
