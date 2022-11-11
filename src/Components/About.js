import React from "react";
import Rectanglekuvsh from "../media/Rectanglekuvsh.png"
import and from "../media/and.png"
import Rectanglechash from "../media/Rectanglechash.png"
import Rectangletar from "../media/Rectangletar.png"

function About(){
    return <div className="container">
    <div className = "about_vst">
        <h4 className = "second__block__first"> Product Categories </h4>
        <h1 className = "about__main_txt"> Porcelain <img class = "&&" src={and} alt = "alttxt"/> Pottery </h1>
    </div>

    <div className = "circles">
        <img className = "circles__item" src = {Rectanglekuvsh} alt = "alttxt"/>
        <img className = "circles__item" src = {Rectanglechash} alt = "alttxt"/>
        <img className = "circles__item" src = {Rectangletar} alt = "alttxt"/>
    </div>

    <div className = "about__text__block">
        <div className = "left__txt__block">
            <h2 className = "left__head__text"> Hand Crafted <br/> Pottery Since 1990 </h2>
            <p className="left__desc__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
        <div className = "right__txt__block">
            <h2 className = "right__head__text"> We Provide Premium <br/> Pottery Produts </h2>
            <p className="right__desc__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
    </div>
    <hr className = "line1"/>
</div>

}

export default About;