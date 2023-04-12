import React from "react";
import "./style.css";
import Polygon from "../../assets/images/Polygon 1.png";
import Title from "../../assets/images/Good bye summer.png";
import bg from "../../assets/images/image 6.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Player = () => {
	return (
		<div className="player">
			{/* <div className="background"></div> */}
			<div className="player-bg">
				<img src={bg} className="player-bg-image" alt="bg" />
			</div>
			<div className="player-btn">
			<PlayArrowIcon sx={{ fontSize: 140 }}/>
				{/* <img src={Polygon} alt="player" className="player-img"></img> */}
			</div>
			{/* <div className="title">
				<img src={Title} alt="title" className="img-title" />
			</div> */}
		</div>
	);
};

export default Player;
