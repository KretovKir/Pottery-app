import React from "react";
import and from '../media/and.png'
import IMAGEairplane from '../media/IMAGEairplane.png'

function FormBlock(){
    return <div className="container">
        <div className = "form__block">
            <img src = {IMAGEairplane} className = "airplane" alt = "altertxt"/>
            <h4 className = "form__sm__headtxt"> LATEST NEWS </h4>
            <h1 className = "forms__headtxt"> Latest news <img className = "&&" src={and} alt = "altertxt"/> New updates </h1>
            <form className = "formandbutton">
                <input className = "form__main" type="text" placeholder="Enter Your E-mail here..."/>
                <button className = "form__button">SUBSCRIBE</button>
            </form>

                <form className = "radiobutton">
                    <input type = "radio"/>
                    <p>Sign up for our newsletter</p>
                </form>
        </div>
    </div>
}

export default FormBlock;