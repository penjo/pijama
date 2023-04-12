import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "./style.css";
import "./nav.css";
import HeaderIcons from "./header-icon";
import HeaderLogo from "./Logo";
import TopHeader from "./TopHeader";
import Search from "./Search";
import { BiBasket, BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <TopHeader />

        <div className="main">
          <Navbar.Brand as={Link} to="/">
            <HeaderLogo />
          </Navbar.Brand>
          <Search />
          <Nav className="ms-auto">
            <div className="header-icons">
              <Nav.Link as={NavLink} to="/user">
                <BiUserCircle className="header-icon" />
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                <BiBasket  className="header-icon" />
              </Nav.Link>
            </div>
          </Nav>
        </div>

    </div>
  );
};
export default Header;
