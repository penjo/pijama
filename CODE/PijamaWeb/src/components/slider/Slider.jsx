import { useState } from "react";
import "./style.css";

import ChevronLeft from "../../assets/images/bx_chevron-left.png";
import ChevronRight from "../../assets/images/bx_chevron-right.png";

// const imgs = [Img1, Img2, Img3];


const Slider = ({sliders}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const onNext = () => {
		if (currentSlide === 2) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const onBack = () => {
		if (currentSlide === 0) {
			setCurrentSlide(2);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	return (
		<div className="slider">
			<div onClick={onBack} className="back">
				<img src={ChevronLeft} alt="" />
			</div>
			<div className="slider-item">
				<div className="img">
					<img src={sliders[currentSlide].imgUrl} alt="" />
				</div>
				<div className="name">{sliders[currentSlide].name}</div>
				<div className="desc">{sliders[currentSlide].desc}</div>
			</div>
			<div onClick={onNext} className="next">
				<img src={ChevronRight} alt="" />
			</div>
		</div>
	);
};

export default Slider;
