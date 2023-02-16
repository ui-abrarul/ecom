import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="category">
      <img src={item.img} alt="" />
      <div className="category-info">
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
