import React from "react";
import IMAGEshop1 from '../media/IMAGEshop1.png'
import IMAGEshop2 from '../media/IMAGEshop2.png'
import IMAGEshop3 from '../media/IMAGEshop3.png'
import IMAGEshop4 from '../media/IMAGEshop4.png'
import IMAGEshop5 from '../media/IMAGEshop5.png'
import IMAGEshop6 from '../media/IMAGEshop6.png'
function Collection(){
    return <div class="container">
    <h4 className = "second__block__first"> Our Online Store </h4>
    <h1 className = "store__headtxt"> Pottery Collection </h1>

    <div className="shop">
        <div className = "shop__card">
            <img src={IMAGEshop1} className = "shop__img" alt = "altertxt"/>
            <p className = "card__desc"> Decor Plate </p>
            <p className = "price"> $ 65.00 USD </p>
        </div>

        <div className = "shop__card">
            <img src={IMAGEshop2} className = "shop__img"alt = "altertxt"/>
            <p className = "card__desc"> Mint Pottery </p>
            <p className = "price"> $ 75.00 USD </p>
        </div>

        <div className = "shop__card">
            <img src={IMAGEshop3} className = "shop__img"alt = "altertxt"/>
            <p className = "card__desc"> Set Of Potterys </p>
            <p className = "price"> $ 125.00 USD </p>
        </div>

        <div className = "shop__card">
            <img src={IMAGEshop4} className = "shop__img"alt = "altertxt"/>
            <p className = "card__desc"> Orange Ceramic </p>
            <p className = "price"> $ 55.00 USD </p>
        </div>

        <div className = "shop__card">
            <img src={IMAGEshop5} className = "shop__img"alt = "altertxt"/>
            <p className = "card__desc"> Dark Bowl </p>
            <p className = "price"> $ 115.00 USD </p>
        </div>

        <div className = "shop__card">
            <img src={IMAGEshop6} className = "shop__img"alt = "altertxt"/>
            <p className = "card__desc"> Square Pottery </p>
            <p className = "price"> $ 75.00 USD </p>
        </div>

        <button className = "shop__button" type = "button"> VIEW ALL PRODUCTS </button>
    </div>
</div>
}

export default Collection;