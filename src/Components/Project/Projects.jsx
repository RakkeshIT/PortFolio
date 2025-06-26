import Project from './Project.module.css'
import Laravel from '../../assets/Skills/Laravel.png'
import NextJs from '../../assets/Skills/nextjs.svg'
import Reactjs from '../../assets/Skills/react.svg'
import More from '../../assets/more-app.svg'
export const Projects = () => {
  return (
    <>
      <div className={Project.E_Container}>
        <h1 className={Project.E_Title}>Projects</h1>

        <div className={Project.Timelins}>

          <div className={`${Project.Container} ${Project.Left_Container}`}>
            <div className={Project.Box}>
              <img src={Laravel} className={Project.TimelinImage} alt="" />
              <div className={Project.Tile_Subtitle}>
                <h2>PHP LARAVEL</h2>
                <h4>Admin Dashboard</h4>
              </div>
            </div>
          </div>
          <div className={`${Project.Container} ${Project.Right_Container}`}>
          <img src={NextJs} className={Project.TimelinImage2} alt="" />
            <div className={Project.Box}>
              <div className={Project.Tile_Subtitle}>
                <h2>Next JS</h2>
                <h4>Event Management System</h4>
              </div>
            </div>
          </div>
          <div className={`${Project.Container} ${Project.Left_Container}`}>
          <img src={Reactjs} className={Project.TimelinImage3} alt="" />
            <div className={Project.Box}>
              <div className={Project.Tile_Subtitle}>
                <h2>PHP Laravel with React JS</h2>
                <h4>Habit Tracker Web Application</h4>
              </div>
            </div>
          </div>
          <div className={`${Project.Container} ${Project.Right_Container}`}>
          <img src={More} className={Project.TimelinImage4} alt="" />
            <div className={Project.Box}>
              <div className={Project.Tile_Subtitle}>
                <h2>More</h2>
                <h4>Click This</h4>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}