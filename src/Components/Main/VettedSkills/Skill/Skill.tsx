import vettedSkill from "../../../../imgs/svg/Seniority approved.svg";
import "./Skill.css"
import react from "../../../../imgs/svg/icons8-react.svg"
import {Rating} from "../../Rating/Rating";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {Button} from "react-bootstrap";
import quiz from "../../../../data/quiz";
import {useState} from "react";
import SubSkill from "../SubSkill/SubSkill";
import challenge from "../../../../data/challenge";


const Skill = () => {

    const [quizArr, setQuizArr] = useState(quiz)
    const [challengeArr, setchallengeArr] = useState(challenge)
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
                            <Rating value={4.8} size={24}/>
                        </div>
                        <span><IoIosArrowUp size="15px" className="vetted__down-arrow" onClick={()=>{}}/></span>
                    </div>
                </div>
                <div className="vetted__quiz">
                    <div className="vetted__quiz-title">
                        <h4>Quiz</h4>
                        <Button variant="flat" className="btn-font">See Quiz results</Button>
                    </div>
                    <div className="vetted__quiz-content">
                        <p className="quiz-font">Includes 15 questions on the following topics</p>
                        <div className="vetted__subSkills">
                            {quizArr.map(el => {
                                return (
                                    <SubSkill key={el.id} {...el}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="vetted__quiz">
                    <div className="vetted__quiz-title">
                        <h4>Coding Challenge</h4>
                        <Button variant="flat" className="btn-font btn-see">See Code</Button>
                    </div>
                    <div className="vetted__quiz-content">
                        <p className="quiz-font">Includes 3 tasks on coding skills</p>
                        <div className="vetted__subSkills">
                            {challengeArr.map(el => {
                                return (
                                    <SubSkill key={el.id} {...el}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;

