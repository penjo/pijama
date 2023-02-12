import React from "react";
import "./style.css";
import ChevronRight from "../../assets/images/Chevron right white.png";
import Logo from "../../assets/images/LOGO.png";
import Momo from "../../assets/images/image 10.png";
import VNPay from "../../assets/images/image 11.png";
import Cod from "../../assets/images/Vector.png";
import FB from "../../assets/images/Vector1.png";
import Ins from "../../assets/images/Vector2.png";
import Tik from "../../assets/images/Vector3.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="title">cooperation</div>
			<div className="phone">(+84) 123 456 789</div>
			<div className="mail">luladesignbyla@gmail.com</div>
			<div className="link">
				<div className="text">All Products</div>
				<div className="arrow">
					<img src={ChevronRight} alt="" />
				</div>
			</div>
			<div className="link">
				<div className="text">About Us</div>
				<div className="arrow">
					<img src={ChevronRight} alt="" />
				</div>
			</div>
			<div className="breaker"></div>
			<div className="bottom">
				<div className="Logo">
					<img src={Logo} alt="" />
				</div>
				<div className="payment">
					<div className="title">Payment Methods</div>
					<div className="imgs">
						<img src={Momo} alt="" />
						<img src={VNPay} alt="" />
						<img src={Cod} alt="" />
					</div>
				</div>
			</div>
			<div className="social">
				<img src={FB} alt="" />
				<img src={Ins} alt="" />
				<img src={Tik} alt="" />
			</div>
		</div>
	);
};

export default Footer;
