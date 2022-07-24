import sass from "../../../../imgs/svg/icons8-sass.svg"
import react from "../../../../imgs/svg/icons8-react.svg"
import './TechnologiesUse.css'

const TechnologiesUse = () => {
    return (
        <div className="technologies__use">
            <h5 className='middle-font'>Technologies</h5>
            <ul className="technologies__use-list">
                <li className="middle-font"><img src={sass} alt="sass"  />Sass</li>
                <li className="middle-font"><img src={react} alt="react" />React</li>
            </ul>
        </div>
    );
};

export default TechnologiesUse;