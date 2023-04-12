import React from "react";
import "./style.css";
import Image from "../../assets/images/Frame 19.png";

const Feedback = () => {
	return (
		<div className="feedback">
			<div className="title">Customer’s Feedback</div>
			<div className="detail">
				Your feedback helps us to improve the quality of our products and
				services
			</div>
			<div className="img">
				<img src={Image} alt="" className="image" />
			</div>
		</div>
	);
};

export default Feedback;
