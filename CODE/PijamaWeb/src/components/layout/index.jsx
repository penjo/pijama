import React from "react";
import Header from "../header";
import Footer from "../footer/Footer";
import { Outlet, Link } from "react-router-dom";


function Layout({ childrend }) {
	return (
		<>
			<Header></Header>
			<Outlet />
			{/* {childrend} */}
			<Footer></Footer>
		</>
		
	);
}
export default Layout;
