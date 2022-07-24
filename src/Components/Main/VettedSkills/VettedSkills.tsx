import './VettedSkills.css'
import vetted from "../../../imgs/svg/vetted.svg"
import technologies from "../../../imgs/svg/technologies.svg";
import Skill from "./Skill/Skill";
import SkillOff from "./SkillOff/Skill";
import {useState} from "react";

const VettedSkills = () => {
    const [skillToggle,useSkillToggle] = useState(true)
    return (
        <section className='vetted'>
            <div className="wrapper">
                <div className="vetted_content">
                    <div className="vetted__title">
                        <img src={vetted} alt="vetted"/>
                        <h3>Vetted Skills</h3>
                    </div>
                    <div className="vetted__desc">
                        <div className="vetted__text">
                            <p className="middle-font">
                                This developer passed 3+ hours of rigorous for the following skills
                            </p>
                            <div className="vetted__question">
                                <img src={technologies} alt="question"/>
                                <p className="middle-font">What is a Vetted skill? Learn more about our skill assessment methodology </p>
                            </div>
                        </div>
                        {skillToggle?<SkillOff/>:<Skill/>}
                        {/*<Skill/>*/}
                        {/*<SkillOff/>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VettedSkills;