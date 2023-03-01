import React from "react";
import "./style.css";
import Logo from "../../assets/images/LOGO.png";
const HeaderLogo = () =>{
    return(
        <>
        <img src={Logo} className="logo-img" alt="logo" />
        <h3>LULA SHOP</h3>
        </>
    )
}
export default HeaderLogo;