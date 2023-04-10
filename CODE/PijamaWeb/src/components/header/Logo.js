import React from "react";
import "./style.css";
import Logo from "../../assets/images/LOGO.png";
<<<<<<< HEAD

const HeaderLogo = () =>{
    return(
        <img src={Logo} className="logo-img" alt="logo" />
=======
const HeaderLogo = () =>{
    return(
        <>
        <img src={Logo} className="logo-img" alt="logo" />
        <h3>LULA SHOP</h3>
        </>
>>>>>>> 90c1dab3d8c2219b437da08484757856fa73c9e0
    )
}
export default HeaderLogo;