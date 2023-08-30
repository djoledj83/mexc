import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            {/* <div className="gpt3__whatgpt3-feature">
                <Feature title="Solutions" text="All that we do will have specific flow which wil lead your customers thru your product exactly as they expect. The customers will keep asking is there more because our UI and UX design is adapted to needs of basic user which don't necessary need to know any technology!!!"/>
            </div> */}
            <div className="gpt3__whatgpt3-heading">
                <h1 className="naslov__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur.</h1>

            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Trade-in" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." btn="Learn More..." />
                <Feature title="Trade-out" text="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." btn="Learn More...." />

            </div>
        </div>
    )
}

export default WhatGPT3
