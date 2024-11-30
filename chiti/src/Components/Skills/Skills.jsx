import React from '../../assets/Skills/react.svg'
import Laravel from '../../assets/Skills/Laravel.png'
import Html from '../../assets/Skills/html.svg'
import Css from '../../assets/Skills/css.svg'
import Bt from '../../assets/Skills/bt.svg'
import Tlw from '../../assets/Skills/Tlw.svg'
import Sql from '../../assets/Skills/sql.svg'
import Python from '../../assets/Skills/Python.svg'
import './Skills.css'
export const Skills = () => {
    return(
        <div className="S_Container">
            <div className="S_Grid">
                <div className="S_Card React"><img src={React} alt="" /></div>
                <div className="S_Card Laravel"><img src={Laravel} alt="" /></div>
                <div className="S_Card HTML"><img src={Html} alt="" /></div>
                <div className="S_Card Css"><img src={Css} alt="" /></div>
                <div className="S_Card BT"><img src={Bt} alt="" /></div>
                <div className="S_Card TLW"><img src={Tlw} alt="" /></div>
                <div className="S_Card SQL"><img src={Sql} alt="" /></div>
                <div className="S_Card Python"><img src={Python} alt="" /></div>
            </div>
        </div>
    )
}