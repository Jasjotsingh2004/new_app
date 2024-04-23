import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {

    return (
        <div className="body-container">
            <div className="space">   </div>
            <h1 className="big-text">Learn to code - for free</h1>
            <div className="line-gap"></div>
            <h1 className="big-text">Build projects</h1>
            <div className="line-gap"></div>
            <h1 className="big-text">Earn certifications</h1>
            <div className="line-gap"></div>
            <p className="small-text">Since 2014, more than 40,000 freeCodeCamp.orh graduates have gotten </p>
           <p className="small-text"> jobs at tech companies including:</p>
            <div className="line-gap"></div>
            <div className="icon-container">
                <div className="icon">
                    <img src="C:\Users\JASJOT\OneDrive\Desktop\APP2\APP\src\apple-icon.png" alt="Apple" />
                    <p>Apple</p>
                </div>
                <div className="icon">
                    <img src="google-icon.png" alt="Google" />
                    <p>Google</p>
                </div>
                <div className="icon">
                    <img src="microsoft-icon.png" alt="Microsoft" />
                    <p>Microsoft</p>
                </div>
                <div className="icon">
                    <img src="spotify-icon.png" alt="Spotify" />
                    <p>Spotify</p>
                </div>
                <div className="icon">
                    <img src="amazon-icon.png" alt="Amazon" />
                    <p>Amazon</p>
                </div>
            </div>
            <div className="line-gap"></div>
            <a href='/signin'><button className="get-started-button"  type="submit">Get Started</button></a>
            {/* <button className="get-started-button"
            
            
            > Get started</button> */}
        </div>
    );
};

export default Body;
