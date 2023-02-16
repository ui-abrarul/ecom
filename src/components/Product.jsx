import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="circle"></div>
      <img src={item.img} alt="" />
      <div className="product-info">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <SearchOutlined />
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
