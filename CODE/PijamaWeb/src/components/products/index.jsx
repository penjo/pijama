import React from "react";
import "./style.css";
import ProductItem from "../product-item/ProductItem";
import Product1 from "../../assets/images/image 5.png";
import Product2 from "../../assets/images/image 4.png";
import Product3 from "../../assets/images/image 3.png";
import Product4 from "../../assets/images/image 2.png";
import ChevronRight from "../../assets/images/Chevron right.png";
import { Grid } from "@mui/material";

const productImages = [
  Product1,
  Product2,
  Product1,
  Product3,
  Product4,
  Product3,
];

const Products = () => {
  return (
    <>
      {/* <div className="products">
        <div className="title">Top Month Sellers</div>
        <div className="desc">
          Preoder now to receive exclusive deals & gifts
        </div>
        <div className="productList">
          {productImages.map((item, index) => (
            <ProductItem
              isMiddle={index % 2 === 1}
              key={index}
              imgUrl={item}
              price={"300.000"}
              name={"Orange Silk Dress"}
            />
          ))}
        </div>
        <div className="view-all">
          View All Product <img className="icon" src={ChevronRight} alt="" />
        </div>
      </div> */}
	  <div className="products">
        <div className="title">Top Month Sellers</div>
        <div className="desc">
          Preoder now to receive exclusive deals & gifts
        </div>
        <div >
      <Grid container spacing={2}>
          {productImages.map((item, index) => (
            <>
              <Grid item xs={6} md={4} lg={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ProductItem
                  isMiddle={index % 3 === 1}
                  key={index}
                  imgUrl={item}
                  price={"300.000"}
                  name={"Orange Silk Dress"}
                />
              </Grid>
            </>
          ))}
      </Grid>
        </div>
        <div className="view-all">
          View All Product <img className="icon" src={ChevronRight} alt="" />
        </div></div>
    </>
  );
};

export default Products;
