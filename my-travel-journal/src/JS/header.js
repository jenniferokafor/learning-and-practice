import {ReactComponent as Logo} from '../../src/assets/fill-213globe-icon.svg';


export default function Header () {
    return (
        <header>
            <Logo className='logo'/>
            <h1>my travel journal.</h1>
        </header>
    )
}