import React from 'react';
import './features.css';
import { ReactComponent as Mexc } from '../../assets/logo_mxc.svg';


const Feature = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='naslov__text'>More about T-4.Me</h1>
                {/* <p>Make an appointment, let's talk first.</p> */}
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br /><br />

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div className='gpt3__features-heading-slika'>
                <h1 className='naslov__text'>Exclusively on</h1>
                <div className="slike">
                    <Mexc fill="blue" width="100%" height="100%" />
                    {/* <img src={logo_bin} alt="glavna slika" /> */}
                    {/* <img src={logo_by} alt="glavna slika" /> */}
                </div>



                {/* {featuresData.map((item, index) => (
                    <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                ))} */}
            </div>
        </div>
    )
}

export default Feature
