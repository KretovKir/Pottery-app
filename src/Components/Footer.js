import React from "react";
import Pompeologo from '../media/Pompeologo.png'
import IMAGEmail from '../media/IMAGEmail.png'
import IMAGEmap from '../media/IMAGEmap.png'
import IMAGEphone from '../media/IMAGEphone.png'

function Footer(){
    return <div className = "footer">
    <div className = "txt__block__footer">
        <img className = "logo__footer" src={Pompeologo} alt = "altertxt"/>
        <p className = "footer__description">I have always striven to fix beauty in wood, stone, <br/> glass or pottery, that has been my creed.</p>
    </div>

    <div className = "contacts__block">
        <div className = "contacts__item1">
            <img className = "footer__img" src = {IMAGEmail} alt = "altertxt"/>
            <p className = "item__name"> EMAIL </p>
            <p className = "card__desc"> pompeopottery@gmail.com </p>
        </div>

        <div className = "contacts__item2">
            <img className = "footer__img" src = {IMAGEmap} alt = "altertxt"/>
            <p className = "item__name"> FIND </p>
            <p className = "card__desc">Central Park, Manhattan <br/> New York, 1101 </p>
        </div>

        <div className = "contacts__item3">
            <img className = "footer__img" src = {IMAGEphone} alt = "altertxt"/>
            <p className = "item__name"> CALL </p>
            <p className = "card__desc"> +1 292 345 678 </p>
        </div>
    </div>
</div>
}

export default Footer;