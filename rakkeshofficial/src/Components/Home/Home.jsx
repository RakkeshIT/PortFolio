import Profile from '../../images/Profie.jpg'
import { TypeAnimation } from 'react-type-animation'
import Emoji from '../../images/glassesimoji.png'
import Shadow from '../../images/purpleblur.png'
import './Home.css'
export const Home = () => {
    return (
        <div className="Home_Container">
            <div className="H_Content">
                <div className="H_Text">
                    <h3 className='H_Subname'>Hey I Am </h3>
                    <h1 className="H_Name">Rakkesh Kumar J</h1>
                    {/* <h3 className="H_Skill">Full Stack Developer</h3> */}
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'Full Stack Web Developer',
                            1000,
                            'Front End Developer',
                            1000,
                            'Backend Developer',
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        className='H_Skill'
                        repeat={Infinity}
                    />
                    <div className="H_Button">
                        <a href=""><i class="fa-brands fa-github"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                 
                </div>
                <div className="H_Image">
                    <img src={Profile} alt="MyImage" />
                    <img className='H_Emoji' src={Emoji} alt="" />
                    <div className='H_Banner'>
                        <div>
                            <i class="fa-brands fa-react H_React"></i> 
                        </div>
                      <div>
                      <h5>Rakkesh</h5>
                      <p style={{color:'var(--orange)',fontWeight:'800'}}>FSD</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}