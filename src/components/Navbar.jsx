// Components
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

// CSS and assets
import '../css/navbar.css';
import Logo from '../assets/images/novetech_logo_branco.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link to={'/'} className="navbar-brand text-light">
                <img className='logoBranca' src={Logo} alt='Texto Novetech soluções tecnológicas'></img>
            </Link>
            <GiHamburgerMenu size={25} />
            </div>
        </nav>
    );
}

/*
<a className="navbar-brand text-light" href="#">
    <img className='logoBranca' src={Logo}></img>
</a>
*/