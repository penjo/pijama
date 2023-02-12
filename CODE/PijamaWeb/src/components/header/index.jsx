import React from "react";
import "./style.css";
import MenuBar from "../../assets/images/MENU_BAR.png";
import Logo from "../../assets/images/LOGO.png";
import Search from "../../assets/images/Search.png";

const Header = () => {
	return (
		<div className="header">
			<div className="sale">
				<p className="content">AUTUMN SALE: OUR BEST PRICES EVER</p>
			</div>
			<div className="main">
				<div className="menu-bar">
					<img src={MenuBar} className="menu-img" alt="menu" />
				</div>
				<div className="logo">
					<img src={Logo} className="logo-img" alt="logo" />
				</div>
				<div className="search">
					<img src={Search} className="search-img" alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Header;
