import React from 'react';
import resultImg from '../assets/memeimg.png';
import memesData from './memesdata';

// a state object for the meme image and text

export default function Meme () {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1ur9b0.jpg',

    })

    // state for meme images array

    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes);


    // function to get the image from 

    function imageUrl () {
        let memesArray = allMemeImages;
        let num = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[num].url;

        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        })
        )
    }


    return (
        <main>
            <div className='form'>
                <div className="form-input">
                    <input type='text' id="first-line" name='first-line' placeholder="shut up" />
                    <input type='text' id="second-line" name='second-line' placeholder="and take my money" />
                </div>

                <button onClick={imageUrl}>Get a new meme image  🖼</button>
            </div>

            <div className="result">
                <img src={meme.randomImage} />
                <p className='result-f-line'>shut up</p>
                <p className='result-s-line'>and take my money</p>
            </div>
        </main>
    )

    // const [memeImage, setMemeImage] = React.useState({
    // });
}