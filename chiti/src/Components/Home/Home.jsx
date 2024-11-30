import './Home.css'
import { TypeAnimation } from 'react-type-animation'
export const Home = () => {
    return(
        <>
            <div className="H_Container">
                <div className="H_Content">
                    <a href="#" className='H_TCS'><i class="fa-solid fa-bolt"></i><span>TCS NQT SCORE</span></a>
                    <h1 className="H_Title" style={{color:'#fff'}}>Rakkesh Kumar</h1>
                   <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'React Developer',
                            1000,
                            'Laravel Developer',
                            1000,
                            'Web Developer',
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        style={{color:'#fff',fontSize:"1rem", fontWeight:'600'}}
                   />
                   <div className='H_Button'>
                    <a href="" className='CoverLetter'>Cover Letter</a>
                    <a href="" className='Resume'>Resume</a>
                   </div>
                </div>
            </div>
        </>
    )
}