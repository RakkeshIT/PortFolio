import { useState } from 'react';
import Logo from '../../assets/icons8-r-94.png';
import Style from './Navbar.module.css';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [bar, setBar] = useState(false);

    const handleClicked = () => {
        setBar(!bar);
    };

    return (
        <div className={Style.N_Container}>
            <a className={Style.N_Title}>
                <img src={Logo} alt="Logo" width="40" />
                <span></span>
            </a>

            <ul className={bar ? `${Style.N_Menus} ${Style.active}` : Style.N_Menus}>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='Home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='About' smooth={true} duration={500}>About</Link>
                </li>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='Skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='Project' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='Experience' smooth={true} duration={500}>Experience</Link>
                </li>
                <li className={Style.N_Item}>
                    <Link className={Style.Nav_Link} to='Contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div className={bar ? `${Style.N_Icons} ${Style.active}` : Style.N_Icons}>
                <a><i className="fa-brands fa-linkedin-in" style={{ color: '#0077B5' }}></i></a>
                <a><i className="fa-brands fa-square-github" style={{ color: '#4078c0' }}></i></a>
            </div>

            <div className={Style.N_Mobile}>
                <i
                    onClick={handleClicked}
                    className={bar ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
                    style={{ cursor: 'pointer', transition: '.3s' }}
                ></i>
            </div>
        </div>
    );
};
