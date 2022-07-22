import {Button} from "react-bootstrap";
import {FiShare} from "react-icons/fi";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="header__nav">
            <div className="header__title">
                <h1>Igor Zvanko</h1>
                <p className="middle-font">Trainee Frontend Developer</p>
            </div>
            <div className="header__buttons">
                <Button variant="flat" className="btn-font">
                    <FiShare size='20px' color="#373AF5"/>Share
                </Button>
                <Button variant="book" className="btn-font" >
                    Book a call
                </Button>
            </div>
        </div>
    );
};

export default Nav;