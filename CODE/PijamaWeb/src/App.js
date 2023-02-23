import React from "react";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import Layout from "./components/layout";
import HomePage from "./views/home";
import Cart from "./components/Cart/Cart";
import User from "./components/User/user";
import {  Routes, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="Cart" element={<Cart />} />
				<Route path="User" element={<User />} />
				</Route>
			</Routes>	
		</>
	);
}

export default App;
