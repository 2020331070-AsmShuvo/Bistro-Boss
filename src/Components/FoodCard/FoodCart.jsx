import React from "react";

const FoodCart = ({ item }) => {
  const { name, image, category, price, recipe } = item;
  return (
    <div>
      <div className="card w-80 h-96 ml-4 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-[#110404b9] border  text-white absolute right-0 mr-4 mt-4 px-3 py-1 rounded-md">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
