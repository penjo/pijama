import React, {useState} from "react";
import "./Menu.css";
import {BiMenu} from "react-icons/bi"
import { PropaneSharp } from "@mui/icons-material";
function Test(){
    return(
        <Menu>
            <MenuItem icon={<BiMenu/>}>
            <p>Hello</p>
            </MenuItem>
        </Menu>
    )
}

function Menu(props){
    return(
        <div className="Menu">
            <ul className="Menu-nav">
                {props.children}
            </ul>
        </div>
    );
}

function MenuItem(props){
    const [open,setOpen] = useState();
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function DropdownMenu(){
    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            </a>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem>Menu</DropdownItem>
            <DropdownItem>
                
            </DropdownItem>
        </div>
    );
}


export default Test;