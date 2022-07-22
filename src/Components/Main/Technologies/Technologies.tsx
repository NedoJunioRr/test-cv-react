import {BiWrench} from "react-icons/bi";
import technologies from "../../../imgs/svg/technologies.svg"
import Languages from "./Languages/Languages";
import TechnologiesUse from "./TechnologiesUse/TechnologiesUse";
import "./Technologies.css"


const Technologies = () => {
    return (
        <section className='technologies'>
            <div className="wrapper">
                <div className="technologies__content">
                    <div className="technologies__title">
                        <BiWrench size='22px'/>
                        <h2>Technologies stack</h2>
                    </div>
                    <div className="technologies__desc">
                        <div className="technologies__subtitle">
                            <h2>Current stack</h2><img src={technologies} alt="question"/>
                        </div>
                        <Languages/>
                        <TechnologiesUse/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;