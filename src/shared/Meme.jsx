import React from "react";
import data from "/public/data/memesData.js"

export default function Meme() {
    const memesArray = data.data.memes
    function getRandomPicture() {
        const rndNumber=Math.floor(Math.random() * memesArray.length)
        const url =memesArray[rndNumber].url
        console.log(url)
        
    }
    return (
        <div className="container">
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input id="top-text" className="form--input" placeholder="Top Text" type="text"></input>
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input id="bottom-text" className="form--input" placeholder="Bottom Text" type="text"></input>
                </div>
                    <button className="form--button" onClick={getRandomPicture}>Get a meme image 🖼️</button>
            </div>
            <img id="meme--image"></img>
        </div>
    )
}