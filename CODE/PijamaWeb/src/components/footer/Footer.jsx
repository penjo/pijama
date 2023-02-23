import React from "react";
import "./style.css";
import ChevronRight from "../../assets/images/Chevron right white.png";
import Logo from "../../assets/images/LOGO.png";
import {BiPhone} from "react-icons/bi";
import Momo from "../../assets/images/image 10.png";
import VNPay from "../../assets/images/image 11.png";
import Cod from "../../assets/images/Vector.png";
import FB from "../../assets/images/Vector1.png";
import Ins from "../../assets/images/Vector2.png";
import Tik from "../../assets/images/Vector3.png";

const Footer = () => {
	return (
		<div className="footer">
			{/* <div className="title">cooperation</div>
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
			</div> */}
			 <div className='footer_logo'>
			 <img src={Logo} className="logo-img" alt="logo" />
        	</div>
			<div className="footer_block1">
				<p className="phone">HotLine: <a href="tel:+84 123 456 789" >(+84) 123 456 789</a></p>
				<p className="mail">Email: <a href="mailto:luladesignbyla@gmail.com">luladesignbyla@gmail.com</a></p>	
			</div>
			<div className="row">
			<div className="footer_block2">
				<h3 className="footer_title">Hỗ Trợ Khách Hàng</h3>
					<ul>
						<li>Giới thiệu về LULA</li>
						<li>Hướng dẫn thanh toán</li>
						<li>Hướng dẫn mua hàng</li>
						<li>Chính sách bảo mật</li>
						<li>Tuyển dụng</li>
					</ul>
			</div>
			<div className="footer_block3">
				<h3 className="footer_title">Hỗ Trợ Khách Hàng</h3>
					<ul>
						<li>Giới thiệu về LULA</li>
						<li>Hướng dẫn thanh toán</li>
						<li>Hướng dẫn mua hàng</li>
						<li>Chính sách bảo mật</li>
						<li>Tuyển dụng</li>
					</ul>
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
