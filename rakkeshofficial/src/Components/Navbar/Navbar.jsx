import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        // const toggle = document.querySelector('.N_Toggle')
        const links = document.querySelector('.N_Links')
        const contact = document.querySelector('.N_Icons_01')
        // toggle.classList.toggle('click')
        links.classList.toggle('click')
        contact.classList.toggle('click')
    }
    return(
        <>
            <div className="Navbar_Container">
                <div className='N-Title'>
                    <h2 className="Nav_Name">Rakkesh</h2>
                </div>
                {/* <h3 className='N_Toggle'>Toggle</h3> */}
                <div className="N_Links">
                    <ul>
                        <li className="N_Item"><Link to="/" className="N_Link">Home</Link></li>
                        <li className="N_Item"><Link to="about" className="N_Link">About Me</Link></li>
                        <li className="N_Item"><a href="" className="N_Link">Skills</a></li>
                        <li className="N_Item"><a href="" className="N_Link">My Works</a></li>
                        <li className="N_Item"><a href="" className="N_Link">Projects</a></li>
                        <li className="N_Item"><a href="" className="N_Link">Experience</a></li>
                    </ul>
                </div>

                <div className="N_Contact">
                   <a href="" className='N_Icons_01 N_Icons'>
                   <i class="fa-solid fa-address-book"></i>
                   <span>Hire Me</span>
                   </a>
                </div>
                <div className='toggle_Menu' onClick={toggleMenu}>
                    <div className='toggle_Line'></div>
                    <div className='toggle_Line'></div>
                    <div className='toggle_Line'></div>
                </div>
            </div>
        </>
    )
}