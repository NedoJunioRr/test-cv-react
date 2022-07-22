import './Info.css'
import Navbar from "../Nav/Nav";
import Description from "../Description/Description";

const Info = () => {
    return (
        <div className="header__info">
            <Navbar/>
            <Description/>
        </div>
    );
};

export default Info;