import {IRatingProps, Rating} from "../../Rating/Rating";
import {FC} from "react";
import './SubSkill.css'

const SubSkill: FC<IRatingProps> = ({name, value,size}) => {
    return (
        <div className="vetted__sub-skill">
            <h5>{name}</h5>
            <div className="vetted__sub-skill-value">
                <h4>{value}</h4>
                <Rating value={value} size={size}/>
            </div>
        </div>
    );
};

export default SubSkill;