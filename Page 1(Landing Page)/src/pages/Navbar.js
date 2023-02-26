import './frontpage.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( <header className="header" id="header">
    <nav className="nav container">
        <Link to="/" className="nav__logo">Medicare<i class='bx bx-plus-medical'></i></Link>

        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/home" className="nav__link active-link"> <i className='bx bx-home-alt-2' ></i> <span>Home</span></Link>
                </li>
                <li className="nav__item">
                    <Link to="/popular" className="nav__link"> <i className='bx bx-building-house'></i> <span>Diagnose</span></Link>
                </li>
                <li className="nav__item">
                    <Link to="/value" className="nav__link"> <i className='bx bx-award' ></i> <span>Medicines</span></Link>
                </li>
                <li className="nav__item">
                    <Link to="/contact" className="nav__link"> <i className='bx bx-phone'></i> <span>Contact</span></Link>
                </li>
            </ul>
        </div>
        
        {/* <button onClick={()=>handleDark}> */}
        <i className='bx bx-moon change-theme' id="theme-button"></i>
        {/* </button> */}

        <Link to="/" className="button nav__button">Log In</Link>
    </nav>
</header> );
}
 
export default Navbar;