import React from "react";
import "./style.css";
import WhiteArrowLeft from "../../assets/images/swipe_left_black.png";
import WhiteArrowRight from "../../assets/images/swipe_right_black.png";
import ChevronRight from "../../assets/images/Chevron right.png";

const Banner = () => {
	return (
		<div className="banner">
			<div className="arrow left">
				<img src={WhiteArrowLeft} alt="left" />
			</div>
			<div className="main">
				<div className="desc">SEE THE LATEST</div>
				<div className="sale">Save 50% Off</div>
				<button className="btn-shop">
					Shop Now <img src={ChevronRight} alt="" />
				</button>
			</div>
			<div className="arrow right">
				<img src={WhiteArrowRight} alt="left" />
			</div>
			<div className="overlay-banner">
				<div className="overlay"></div>
			</div>
		</div>
	);
};

export default Banner;
