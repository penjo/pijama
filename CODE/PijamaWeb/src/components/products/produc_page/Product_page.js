import React from "react";
import Menu_Product from "../menu-product";
import Products1 from "../products";
import "./Product_page.css";

export default function Product_Page(){
    return(
        <>
        <h1>Sản Phẩm</h1>
        <div className="product_page">
        <Menu_Product/>
        <Products1/>
        </div>
        </>
    )
}