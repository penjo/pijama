import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "./style.css";
import "./nav.css";
import HeaderIcons from "./header-icon";
import HeaderLogo from "./Logo";
import TopHeader from "./TopHeader";
import Search from "./Search";
import Test from "./Menu/Menu";
import {BiBasket,BiUserCircle} from "react-icons/bi";

const Header = () => {
	return (
	<div className="header">
			<TopHeader/>
			<Navbar variant="tab">
			<div className="main">
			<Test/>
			<Navbar.Brand as={Link} to="/"> 
			<HeaderLogo/> 
			</Navbar.Brand>
			<Search/>
			<Nav className="ms-auto">
			<div className="header-icons"> 
				<Nav.Link as={NavLink} to="/user">
					<BiUserCircle className="profile"/>
              	</Nav.Link>
				<Nav.Link as={NavLink} to="/cart">
                	<BiBasket className="cart"/>
              	</Nav.Link>
			</div>
			</Nav>
		</div>
		</Navbar>
	</div>
		
	);
};
export default Header;
