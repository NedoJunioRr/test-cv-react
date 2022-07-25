
import vettedSkill from "../../../../imgs/svg/Seniority approved.svg";
import react from "../../../../imgs/svg/icons8-react.svg";
import {Rating} from "../../Rating/Rating";
import {IoIosArrowDown} from "react-icons/io";
import {FC} from "react";

export interface ABC{
    handler: () => void
}

const SkillOff:FC<ABC> = ({handler}) => {
    return (
        <div className="vetted__skill">
            <img src={vettedSkill} alt="imgVetted" className="vetted__approved"/>
            <div className="vetted__subtitle">
                <div className="vetted__main-skill">
                    <div className="vetted__name">
                        <img src={react} alt="react"/>
                        <h2>React</h2>
                    </div>
                    <div className="vetted__rating">
                        <div className="vetted__rating-value">
                            <h4>4.8</h4>
                            <Rating value={4.8} size={24} />
                        </div>
                        <span onClick={handler}><IoIosArrowDown size="15px" className="vetted__down-arrow" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillOff;