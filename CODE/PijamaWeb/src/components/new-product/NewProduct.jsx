import React from "react";
import "./style.css";
import Product1 from "../../assets/images/Rectangle 9.png";
import Product2 from "../../assets/images/Rectangle 10.png";
import Product3 from "../../assets/images/Rectangle 8.png";
import ChevronRight from "../../assets/images/Chevron right white.png";
import { Grid } from "@mui/material";

const NewProduct = () => {
	return (
		<>
			<div className="new-product">
				{/* <div className="product-item">
					<div className="product-img">
						<img src={Product1} alt="" className="image" />
					</div>
					<div className="product-content">Sale 20% Off Blazer Suit</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div> */}
				{/* <div className="product-item">
					<div className="product-img">
						<img src={Product2} alt="" className="image" />
					</div>
					<div className="product-content">Launches new nightgown</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div>
			<div className="product-item">
				<div className="product-img">
					<img src={Product3} alt="" />
				</div>
				<div className="product-content">Sale 20% Off Blazer Suit</div>
				<div className="arrow">
					<img src={ChevronRight} alt="" />
				</div>
			</div> */}
			</div>
			{/* <div className="blazer">
				<div className="product-item">
					<div className="product-img">
						<img src={Product3} alt="" />
					</div>
					<div className="product-content">Sale 20% Off Blazer Suit</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div>
			</div> */}

			<Grid container>

				<Grid item xs={6}>
				<div className="product-item">
					<div className="product-img">
						<img src={Product1} alt="" className="image" />
					</div>
					<div className="product-content">Sale 20% Off Blazer Suit</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div>
				</Grid>
				<Grid item xs={6}>
				<div className="product-item">
				<div className="product-img">
						<img src={Product2} alt="" className="image" />
					</div>
					<div className="product-content">Launches new nightgown</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div>
				</Grid>
				<Grid item xs={12}>
				<div className="product-item">
				<div className="product-img">
						<img src={Product3} alt="" className="image" />
					</div>
					<div className="product-content">Sale 20% Off Blazer Suit</div>
					<div className="arrow">
						<img src={ChevronRight} alt="" />
					</div>
				</div>
				</Grid>
			</Grid>
		</>
	);
};

export default NewProduct;
