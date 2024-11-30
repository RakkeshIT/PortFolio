import { useState } from 'react'
import Logo from '../../assets/icons8-r-94.png'
import './Navbar.css'
export const Navbar = () => {
    const [bar, setBar] = useState(false);
    const handleClicked = () => {
        setBar(!bar)
    }
    return(
        <div className="N_Container">
            <a href="" className='N_Title' style={{display:'flex',alignItems:'center',gap:'10px'}}><img src={Logo} alt="Logo" 
             width='40'/><span>Rakki</span></a>

             <ul id='N_Menus' className={bar ? '#N_Menus active':'#N_Menus'}>
                <li className='N_Item'><a href="" className='N_Link'>Home</a></li>
                <li className='N_Item'><a href="" className='N_Link'>About</a></li>
                <li className='N_Item'><a href="" className='N_Link'>Skills</a></li>
                <li className='N_Item'><a href="" className='N_Link'>Projects</a></li>
                <li className='N_Item'><a href="" className='N_Link'>My Works</a></li>
                <li className='N_Item'><a href="" className='N_Link'>Services</a></li>
             </ul>

             <div id='N_Icons' className={bar ? '#N_Icons active': '#N_Icons'}>
                <a href=""><i className="fa-regular fa-address-book"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                <a href=""><i className="fa-brands fa-square-github"></i></a>
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