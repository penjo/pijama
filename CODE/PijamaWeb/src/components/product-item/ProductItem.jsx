import React from "react";
import "./style.css";
import Heart from "../../assets/images/ant-design_heart-outlined.png";

const ProductItem = ({ imgUrl, price, name, isMiddle }) => {
	return (
		<div
			style={
				isMiddle
					? {
							marginTop: "0px",
					  }
					: {}
			}
			className="product-item"
		>
			<div className="newTag">New</div>
			<div className="heart">
				<img src={Heart} alt="heart" />
			</div>

			<div className="product-item-img">
				<img src={imgUrl} alt={name} />
			</div>
			<div className="product-type">Dress</div>
			<div className="product-name">{name}</div>
			<div className="product-price">{price}đ</div>
		</div>
	);
};

export default ProductItem;
