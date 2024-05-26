import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Paralux from "../../../Components/Paralux/Paralux";
import img from "../../../assets/home/chef-service.jpg";
import PopularMenu from "./../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="md:px-10">
        <Category />
        <Paralux
          image={img}
          title="Bistro Boss"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
        <PopularMenu />
        <Featured />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
