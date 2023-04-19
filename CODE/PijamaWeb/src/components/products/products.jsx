import React from "react";
import "./products.css";
import Menu_Product from "./menu-product";
import ProductItem from "../product-item/ProductItem";
import Product1 from "../../assets/images/image 5.png";
import Product2 from "../../assets/images/image 4.png";
import Product3 from "../../assets/images/image 3.png";
import Product4 from "../../assets/images/image 2.png";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
const productImages = [
    Product1,
    Product2,
    Product3,
    Product4,
    Product1,
    Product1,

]
function Products1 (){
    return(
      <>

      <div className="product">
        <>
          <Grid container spacing={2}>
            {productImages.map((item, index) => (
              <>
                <Grid item xs={6} md={4} lg={4} sx={{ display: "flex", justifyContent: "center", border: "2px solid #000" }}>
                  <ProductItem
                    isMiddle={index % 3 === 1}
                    key={index}
                    imgUrl={item}
                    price={"300.000"}
                    name={"Orange Silk Dress"} />
                </Grid>
              </>
            ))}
          </Grid>
        </>
      </div>

      </>
        
    );
}
export default Products1