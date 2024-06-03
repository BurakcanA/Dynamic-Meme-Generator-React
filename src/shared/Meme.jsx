import React from "react";
import data from "/public/data/memesData.js"

export default function Meme() {
    const [allMemes,setAllMemes] = React.useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    const [meme,SetMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    function getRandomPicture() {
        const rndNumber=Math.floor(Math.random() * allMemes.length)
        SetMeme(item => ({
            ...item,
            randomImage:allMemes[rndNumber].url
        }))
    }

    async function handleChange(event) {
        const {name,value} = event.target
        await SetMeme(item => ({
            ...item,
            [name]: value,
        }))
        console.log(meme)
    }

    return (
        <div className="container">
            <div className="form">
                <div>
                    <input id="top-text" className="form--input" placeholder="Top Text" type="text" value={meme.topText} name="topText" onChange={handleChange}></input>
                </div>
                <div>
                    <input id="bottom-text" className="form--input" placeholder="Bottom Text" type="text" value={meme.bottomText} name="bottomText" onChange={handleChange}></input>
                </div>
                    <button className="form--button" onClick={getRandomPicture}>Get a meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}