import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useState} from "react";

const App = () => {



    return (
        <div className="container__wrapper">
            <div className="content__wrapper">
                <Header/>
                <Main />
                <Footer/>
            </div>
        </div>
    );
};

export default App;
