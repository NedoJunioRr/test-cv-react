import {TiHtml5} from "react-icons/ti";
import {DiCss3} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import htmlSvg from "../../../../imgs/svg/icons8-html-5.svg"
import cssSvg from "../../../../imgs/svg/icons8-css3.svg"
import jsSvg from "../../../../imgs/svg/icons8-javascript.svg"
import "./Languages.css"

const Languages = () => {
    return (
        <div className="technologies__languages">
            <h3 className='middle-font'>Languages</h3>
            <ul className="technologies__languages-list">
                <li className="middle-font"><img src={htmlSvg} alt="html"/>HTML</li>
                <li className="middle-font"><img src={cssSvg} alt="css"/>CSS</li>
                <li className="middle-font"><img src={jsSvg} alt="js"/>JavaScript</li>
            </ul>
        </div>
    );
};

export default Languages;