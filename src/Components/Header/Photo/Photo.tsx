import photo from "../../../photo.jpg";
import './Photo.css'

const Photo = () => {
    return (
        <div className="header__image">
            <img src={photo} alt="photo"/>
        </div>
    );
};

export default Photo;