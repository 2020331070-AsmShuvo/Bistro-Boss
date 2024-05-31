import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provides/AuthProvide";

const useCart = () => {
  // tab stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  console.log("called");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
