import React from "react";
import data from "/public/data/memesData.js"

export default function Meme() {
    const [allMemeImages,setAllMemeImages] = React.useState(data.data.memes)

    const [meme,SetMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    

    function getRandomPicture() {
        const rndNumber=Math.floor(Math.random() * memesArray.length)
        SetMeme(item => ({
            topText: "",
            bottomText: "",
            randomImage:allMemeImages[rndNumber].url
        }))
    }
    return (
        <div className="container">
            <div className="form">
                <div>
                    <input id="top-text" className="form--input" placeholder="Top Text" type="text"></input>
                </div>
                <div>
                    <input id="bottom-text" className="form--input" placeholder="Bottom Text" type="text"></input>
                </div>
                    <button className="form--button" onClick={getRandomPicture}>Get a meme image 🖼️</button>
            </div>
            <img id="meme--image" className="meme--image" src={meme.randomImage}></img>
        </div>
    )
}