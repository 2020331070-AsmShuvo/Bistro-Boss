import React, { useContext } from "react";
import { AuthContext } from "../../provides/AuthProvide";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { name, image, category, price, recipe, _id } = item;
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  // console.log(serverUrl);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (user && user.email) {
      // send item to db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post(`/carts`, cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Added to cart",
            timer: 1000,
            showConfirmButton: false,
            icon: "success",
          });
          refetch();
        }
      });
    } else {
      Swal.fire("You are not logged in. Please Lgoin");
      navigate("/login");
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
