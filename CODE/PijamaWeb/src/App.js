import React from "react";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import Products1 from "./components/products/products";
import Layout from "./components/layout";
import HomePage from "./views/home";
import Cart from "./components/Cart/Cart";
import User from "./components/User/user";
import ProductDetail from "./components/product-item/text";
import {  Routes, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product_Page from "./components/products/produc_page/Product_page";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="Products" element={<Product_Page/>}/>
				<Route path="text" element={<ProductDetail/>}/>
				<Route path="Cart" element={<Cart />} />
				<Route path="User" element={<User />} />			
				</Route>
			</Routes>	
		</>
	);
}

export default App;
