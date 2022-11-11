import React from "react";
import and from "../media/and.png"
import flowers from "../media/flowers.png"


function MainBlock(){
    return <div className = "home__block">
    <div className = "content">
        <div className = "text__info">
            <div className  = "pompeo__pottery"> POMPEO POTTERY </div>
            <div className = "home__main__txt"> <h1>Unique Porselain <img className = "&&" src={and}  alt = "alter"/> <br/> Stone Collection </h1></div>
            <p className = "description__home">Unique & modern pottery made by our master in porcelain & stones </p>
            <button className = "home__button" type = "button"> SHOP COLLECTION </button>
        </div>   
        <div className = "flowers">
            <img className = "flowers_img" src={flowers} alt = "alter"/> 
        </div>
        </div>
    </div>
}

export default MainBlock;