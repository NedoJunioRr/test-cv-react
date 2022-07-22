import {BsFillHandbagFill} from "react-icons/bs";
import {WiTime4} from "react-icons/wi";
import available from "../../../imgs/svg/icons.svg";
import {GrDocumentText} from "react-icons/gr";
import './Description.css'

const Description = () => {
    return (
        <div className="header__desc">
            <ul className="header__list">
                <li><BsFillHandbagFill size="22px"/><span className="middle-font">1 year - total study experience</span></li>
                <li><WiTime4 size="22px"/><span className="middle-font">Overlap with your time zone: 09 am - 18 pm</span></li>
                <li><img src={available} alt='available'/><span className="middle-font">Availability: Ready to start now </span></li>
                <li><GrDocumentText size="22px"/><span className="middle-font">Full time - 40 hours per week</span></li>
            </ul>
            <p className="header__text min-font">I am a trainee frontend developer with no commercial experience.
                Started learning Frontend in 2021. I want to find my first job in order to implement
                ways to solve various business problems, as well as to develop and improve my professional skills.
            </p>
        </div>
    );
};

export default Description;