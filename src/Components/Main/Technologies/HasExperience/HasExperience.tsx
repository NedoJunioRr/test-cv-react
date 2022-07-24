import technologies from "../../../../imgs/svg/technologies.svg";
import git from "../../../../imgs/svg/icons8-git.svg";
import axios from "../../../../imgs/svg/axios-icon.svg";
import "./HasExperience.css"

const HasExperience = () => {
    return (
        <div className="technologies__experience">
            <div className="technologies__subtitle">
                <h3>Has Experience in</h3><img src={technologies} alt="question"/>
            </div>
            <ul className="technologies__experience-list">
                <li className="middle-font"><img src={git} alt="git"/>Git</li>
                <li className="middle-font"><img src={axios} alt="axios"/>Axios</li>
            </ul>
        </div>
    );
};

export default HasExperience;