import './Header.scss'
import photo from '../../photo.jpg'
import {BsFillHandbagFill} from 'react-icons/bs';
import {WiTime4} from 'react-icons/wi';
import available from '../../imgs/icons.svg'
import {GrDocumentText} from "react-icons/gr";
import {Button} from "react-bootstrap";
import {FiShare} from "react-icons/fi";


const Header = () => {
    return (
        <div className='wrapper'>
            <div className="header__content">
                <div className="header__image">
                    <img src={photo} alt="photo"/>
                </div>
                <div className="header__info">
                    <div className="header__nav">
                        <div className="header__title">
                            <h1>Igor Zvanko</h1>
                            <p>Trainee Frontend Developer</p>
                        </div>
                        <div className="header__buttons">
                            <Button variant="flat" >
                                <FiShare size='20px' color="#373AF5"/>Share
                            </Button>
                            <Button variant="book" >
                                Book a call
                            </Button>
                        </div>
                    </div>
                    <div className="header__desc">
                        <ul>
                            <li><BsFillHandbagFill/><span>1 year - total study experience</span></li>
                            <li><WiTime4/><span>Overlap with your time zone: XX am - XX pm</span></li>
                            <li><img src={available} alt='available'/><span>Availability: Ready to start now </span></li>
                            <li><GrDocumentText/><span>Full time - 40 hours per week</span></li>
                        </ul>
                        <p>I am a trainee frontend developer with no commercial experience.
                            Started learning Frontend in 2021. I want to find my first job in order to implement
                            ways to solve various business problems, as well as to develop and improve my professional skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;