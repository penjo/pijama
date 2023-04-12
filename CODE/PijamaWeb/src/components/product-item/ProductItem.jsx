import React from "react";
import "./style.css";
import Heart from "../../assets/images/ant-design_heart-outlined.png";
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
const ProductItem = ({ imgUrl, price, name, isMiddle }) => {
	return (
		<div
			style={
				isMiddle
					? {
							top: "20px",
					  }
					: {}
			}
			className="product-item"
		>
			<div className="newTag">New</div>
			<div className="heart">
				<FavoriteOutlined sx={{color:"red"}}/>
			</div>

			<div className="product-item-img">
				<img src={imgUrl} alt={name} style={{width:"200px"}}/>
			</div>
			<div className="product-type">Dress</div>
			<div className="product-name">{name}</div>
			<div className="product-price">{price}đ</div>
		</div>
	);
};

export default ProductItem;
