import React from 'react';
import resultImg from '../assets/memeimg.png';
import memesData from './memesdata';

let memesArray = memesData.data.memes;

export default function Meme () {
    const [memeImage, setMemeImage] = React.useState('');

    function imageUrl () {
        let num = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[num].url);




        // let thisUrl = memesArray[num].url;
        // console.log(thisUrl)
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
                <img src={memeImage} />
                <p className='result-f-line'>shut up</p>
                <p className='result-s-line'>and take my money</p>
            </div>
        </main>
    )
}