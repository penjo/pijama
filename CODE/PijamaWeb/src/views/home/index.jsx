import React from "react";
import Discover from "../../components/discover/Discover.jsx";
import Feedback from "../../components/feedback/Feedback.jsx";
import NewProduct from "../../components/new-product/NewProduct.jsx";
import Player from "../../components/player/Player.jsx";
import Products from "../../components/products/index.jsx";

import Slider from "../../components/slider/Slider.jsx";

import {sliders} from '../../data/fake'
import "./styles.css";


export default function HomePage() {
	return (
		<div className="container">
			<Products />
			<Player />
			<Slider sliders={sliders}/>
			<NewProduct />
			<Discover />
			<Feedback />
		</div>
	);
}
