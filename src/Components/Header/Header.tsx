import './Header.css'

import Photo from "./Photo/Photo";
import Info from "./Info/Info";


const Header = () => {
    return (
        <div className='wrapper'>
            <div className="header__content">
                <Photo/>
                <Info/>
            </div>
        </div>
    );
};

export default Header;