import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useState} from "react";

const App = () => {

    const [skillToggle,useSkillToggle] = useState(false)

    const changeSkillToggle = (e.React.mouseev) =>{
        useSkillToggle(true)
    }
    return (
        <div className="container__wrapper">
            <div className="content__wrapper">
                <Header/>
                <Main changeSkillToggle={changeSkillToggle}/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
