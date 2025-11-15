import {useState } from 'react'
import Logo from '../../assets/icons8-r-94.png'
import './Navbar.css'
import { Link } from 'react-scroll';
export const Navbar = () => {
    const [bar, setBar] = useState(false);
    const handleClicked = () => {
        setBar(!bar)
    }
    
    return(
        <div className="N_Container">
            <a href="" className='N_Title' style={{display:'flex',alignItems:'center',gap:'10px'}}><img src={Logo} alt="Logo" 
             width='40'/><span></span></a>

             <ul id='N_Menus' className={bar ? '#N_Menus active':'#N_Menus'}>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='Home' smooth={true} duration={500}> Home</Link></li>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='About' smooth={true} duration={500}> About</Link></li>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='Skills' smooth={true} duration={500}> Skills</Link></li>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='Project' smooth={true} duration={500}> Projects</Link></li>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='Experience' smooth={true} duration={500}> Experience</Link></li>
                <li className='N_Item'><Link className={Navbar.Nav_Link} to='Contact' smooth={true} duration={500}> Contact</Link></li>
             </ul>

             <div id='N_Icons' className={bar ? '#N_Icons active': '#N_Icons'}>
                {/* <a href=""><i className="fa-regular fa-address-book"></i></a> */}
                <a href=""><i className="fa-brands fa-linkedin-in" style={{color:'#0077B5'}}></i></a>
                <a href=""><i className="fa-brands fa-square-github" style={{color: '#4078c0'}}></i></a>
             </div>

             <div className='N_Mobile'>
                <i onClick={handleClicked}
                className={bar ? 'fa-solid fa-xmark':'fa-solid fa-bars'}
                style={{cursor:'pointer', transition:'.3s'}}
                ></i>
             {/* <i class="fa-solid fa-bars"></i>
             <i class="fa-solid fa-xmark"></i> */}
             </div>
        </div>
    )
}