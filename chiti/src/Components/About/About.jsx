import './About.css'
import Me from '../../assets/RakkeshComipng.png'
export const About = () => {
    return (
        <>
            <div className="A_Container">
                <h1 className='A_Title'>About Me</h1>
                <div className="A_Content">
                    <div className='A_Image'>
                        <img src={Me} className='RakkeshImage' alt="Rakkesh" />
                    </div>
                    <div className='A_SubContent'>
                        <p className='A_About'>I am Rakkesh Kumar, a passionate Full Stack Web Developer with expertise in React and Laravel frameworks. With hands-on experience in building dynamic and responsive web applications, I have successfully completed a two-month internship in Full Stack Development. During this time, I developed several projects showcasing my skills in front-end and back-end technologies. I am dedicated to crafting efficient and scalable solutions while continuously learning and improving. My goal is to contribute to innovative projects that make a real-world impact.</p>
                        <a href="" className='A_Button'>Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}