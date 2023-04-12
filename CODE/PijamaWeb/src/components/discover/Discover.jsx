import React from "react";
import ChevronRight from "../../assets/images/Chevron right white.png";
import bg from "../../assets/images/image 7.png";
import "./style.css";

const Discover = () => {
	return (
		<div className="discover">
			<div className="background">
				<img src={bg} alt="bg"></img>
			</div>
			<div className="title">Pride of LULA</div>
			<div className="content">
				<div className="text">
					Because it is made from 100% natural, it is not mixed with any other
					materials. And this is also the reason why silk fabric becomes safe
					for users because it does not cause skin irritation for sensitive
					people.
				</div>
				<div className="text">
					Of all her pajamas designs, Lula believes that Silk is the perfect
					material to convey all of our enthusiasm in it!
				</div>
				<div className="text">
					Let Lula bring tender love to you, because you deserve it!
				</div>
			</div>
			<button className="button-discover">
				Discover Now <img src={ChevronRight} alt="" className="image"/>
			</button>
		</div>
	);
};

export default Discover;
