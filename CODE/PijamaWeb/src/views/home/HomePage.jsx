import React from "react";
import Banner from "../../components/banner/index.jsx";
import Discover from "../../components/discover/Discover.jsx";
import Feedback from "../../components/feedback/Feedback.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header";
import NewProduct from "../../components/new-product/NewProduct.jsx";
import Player from "../../components/player/Player.jsx";
import Products from "../../components/products/index.jsx";
import Slider from "../../components/slider/Slider.jsx";
import "./styles.css";

export default function HomePage() {
	return (
		<div className="container">
			<Header />
			<Banner />
			<Products />
			<Player />
			<Slider />
			<NewProduct />
			<Discover />
			<Feedback />
			<Footer />
		</div>
	);
}
