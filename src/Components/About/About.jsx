import About from './About.module.css'
import Me from '../../assets/RakkeshComipng.png'
export const AboutPage = () => {
    return (
        <>
            <div className={About.A_Container}>
                <h1 className={About.A_Title}>About Me</h1>
                <div className={About.A_Content}>
                    <div className={About.A_Image}>
                        <img src={Me} className={About.RakkeshImage} alt="Rakkesh" />
                    </div>
                    <div className={About.A_SubContent}>
                        <p className={About.A_About}>I am Rakkesh Kumar, a passionate Full Stack Web Developer with expertise in React and Laravel frameworks. With hands-on experience in building dynamic and responsive web applications, I have successfully completed a two-month internship in Full Stack Development. During this time, I developed several projects showcasing my skills in front-end and back-end technologies. I am dedicated to crafting efficient and scalable solutions while continuously learning and improving. My goal is to contribute to innovative projects that make a real-world impact.</p>
                        <a href="" className={About.A_Button}>Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}