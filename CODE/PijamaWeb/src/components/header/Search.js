import React from "react";
import "./style.css";
import {BiSearch} from "react-icons/bi";


 const Search = () =>{
    return (
        <div className="search-bar">
                <input type="text" placeholder="Tìm Kiếm Sản Phẩm"/>
                    <BiSearch className="search-icon"/>
            </div>
    )
 }
 export default Search;