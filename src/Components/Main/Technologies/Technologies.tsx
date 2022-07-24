import {BiWrench} from "react-icons/bi";
import technologies from "../../../imgs/svg/technologies.svg"
import Languages from "./Languages/Languages";
import TechnologiesUse from "./TechnologiesUse/TechnologiesUse";
import "./Technologies.css"
import git from "../../../imgs/svg/icons8-git.svg";
import axios from "../../../imgs/svg/axios-icon.svg";
import "./Languages/Languages.css"
import HasExperience from "./HasExperience/HasExperience";


const Technologies = () => {
    return (
        <section className='technologies'>
            <div className="wrapper">
                <div className="technologies__content">
                    <div className="technologies__title">
                        <BiWrench size='22px'/>
                        <h3>Technologies stack</h3>
                    </div>
                    <div className="technologies__desc">
                        <div className="technologies__subtitle">
                            <h3>Current stack</h3><img src={technologies} alt="question"/>
                        </div>
                        <Languages/>
                        <TechnologiesUse/>
                        <HasExperience/>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;