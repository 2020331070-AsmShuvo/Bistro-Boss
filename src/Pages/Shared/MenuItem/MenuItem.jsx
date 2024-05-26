import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, category, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        src={image}
        className="w-[80px] h-[80px] border border-gray-200"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div>
        <h3 className="uppercase">{name}-----------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-blue-600 ">${price}</p>
    </div>
  );
};

export default MenuItem;
