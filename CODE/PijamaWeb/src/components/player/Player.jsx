import React from "react";
import "./style.css";
import Polygon from "../../assets/images/Polygon 1.png";
import Title from "../../assets/images/Good bye summer.png";

const Player = () => {
	return (
		<div className="player">
			<div className="background"></div>
			<div className="player-btn">
				<img src={Polygon} alt="player" className="player-img"></img>
			</div>
			<div className="title">
				<img src={Title} alt="title" className="img-title" />
			</div>
		</div>
	);
};

export default Player;
