import React from "react";
import "./style.css";
import {BiBasket,BiUserCircle} from "react-icons/bi";

 const HeaderIcons = () =>{
    return (
        <div className="header-icons"> 
				  <BiUserCircle className="profile"/>
          <BiBasket className="cart"/>
		</div>
        
    )
}
export default HeaderIcons;