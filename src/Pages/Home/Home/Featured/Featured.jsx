import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="relative my-10 w-5/6 mx-auto">
      <div
        className="bg-fixed absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-"></div>
      </div>
      <div className="relative rounded z-10 py-16 px-8 bg-opacity-75 bg-black bg-blend-multiply">
        <SectionTitle subHeading="Check it out" heading="Featured item" />
        <div className="md:flex justify-center items-center py-8 px-16 text-white">
          <div className="md:w-1/2">
            <img src={featuredImg} alt="Featured" className="w-full h-auto" />
          </div>
          <div className="md:ml-10 md:w-1/2">
            <p className="font-semibold">Aug 20, 2029</p>
            <p className="font-semibold">Where can I get some?</p>
            <p className="uppercase text-gray-">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ad non! Nobis, rem dignissimos recusandae consectetur dolore et
              sit ullam eligendi, cum sunt illum provident debitis in! Maiores
              adipisci iusto enim earum eveniet? Recusandae pariatur placeat,
              repellat in neque porro ratione delectus, provident quo, vero
              accusantium numquam aliquid alias earum!
            </p>
            <button className="btn btn-outline mt-4">Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
