import React from "react";
import Pompeologo from '../media/Pompeologo.png'

function Header(){
    return <div className = "container">
        <div className = "header__menu">
            <div className="logo">
                <img className = "logo__style" src = {Pompeologo} alt="Логотип" /> 
            </div> 

            <div className = "head__menu__block">
                <ul className = "menu__main">
                    <li className ="up__menu__item">Home </li>
                    <li className ="up__menu__item">About </li>
                    <li className ="up__menu__item">Shop </li>
                    <li className ="up__menu__item">Contact </li>
                </ul>
                <div className = "cart">
                    <p className = "cart__text"> Cart </p>
                </div>
            </div>
        </div>
    </div>
}

export default Header;