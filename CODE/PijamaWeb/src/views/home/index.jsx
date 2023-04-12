import React from "react";
import Discover from "../../components/discover/Discover.jsx";
import Feedback from "../../components/feedback/Feedback.jsx";
import NewProduct from "../../components/new-product/NewProduct.jsx";
import Player from "../../components/player/Player.jsx";
import Products from "../../components/products/index.jsx";

import Slider from "../../components/slider/Slider.jsx";

import {sliders} from '../../data/fake'
import "./styles.css";
import { Container } from "@mui/material";
import Carousel from "../../components/carousel/index.jsx";
// import Carousel from "react-slick";

export default function HomePage() {

	return (
		<>
		<div >

			<Carousel/>
		<Container >
			<Products />
			<Player />
			<Slider sliders={sliders}/>
			<NewProduct />
			<Discover />
			<Feedback />
		</Container>
		</div>
		</>
	);
}
