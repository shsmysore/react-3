import './Header.css';
import navBarImg from '../assets/ring.png'

function Header() {
    return(
        <header className="header">
            <img src={navBarImg} alt='journal image'></img>
            <h1>my travel journal..</h1>
        </header>
    )
}

export default Header;