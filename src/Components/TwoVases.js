import React from "react";
import IMAGEblockvaza from "../media/IMAGEblockvaza.png";
import IMAGEvazasrukami from "../media/IMAGEvazasrukami.png";
function TwoVases(){
    return <div className = "container">
    <div className = "dve__vazi">
        <div className = "left__block">
        <img className ="vaza" src={IMAGEblockvaza} alt = "alttxt"/>
            <div className = "orange">
                <h2 className = "left__headtxt__vazi">Orange Ceramic</h2>
                <p className = "vazi__desc">Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                <a href = "" className = "details">View Details</a>
            </div>
        </div>

        
        <div className = "right__block">
            <div className = "Gold">
                <h2 className = "left__headtxt__vazi">Gold & Black Pottery</h2>
                <p className = "vazi__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                <a href = "" className = "details">View Details</a>
                <img className ="vaza2" src={IMAGEvazasrukami}alt = "alttxt"/>
            </div>
        </div>
        
    </div>
    <hr className = "line"/>
</div>

}
    

export default TwoVases;