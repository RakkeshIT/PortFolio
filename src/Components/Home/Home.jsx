import Home from './Home.module.css'
import { TypeAnimation } from 'react-type-animation'
export const HomePage = () => {
    return(
        <>
            <div className={Home.H_Container}>
                <div className={Home.H_Content}>
                    {/* <a href="#" className={Home.H_TCS}><i className="fa-solid fa-bolt"></i><span>TCS NQT SCORE</span></a> */}
                    <h1 className={Home.H_Title} style={{color:'#fff'}}>Rakkesh Kumar</h1>
                   <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'React Developer',
                            1000,
                            'Laravel Developer',
                            1000,
                            'Web Developer',
                            1000,
                            "MERN Stack Developer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        style={{color:'#fff',fontSize:"1rem", fontWeight:'600'}}
                   />
                   <div className={Home.H_Button}>
                    <a href="" className={Home.CoverLetter}>Cover Letter</a>
                    <a href="/public/asset/file/Rakkesh.pdf" download='Rakkesh Full Stack Developer' className={Home.Resume}>Resume</a>
                   </div>
                </div>
            </div>
        </>
    )
}