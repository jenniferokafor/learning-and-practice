import memehead from '../assets/Troll Facetrollface.png';

export default function Header () {
    return (
        <header>
            <div className='logo'>
                <img src={memehead} />
                <h1>Meme Generator</h1>
            </div>

            <p className='attribute'>React Course - Project 3</p>
        </header>
    )
}