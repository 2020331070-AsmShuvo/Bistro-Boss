import React from "react";

const PageCover = ({ image, title, desc }) => {
  return (
    <div>
      <div
        className="hero lg:h-[450px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="bg-[#03010156] px-24 py-16 rounded">
            <h1 className="mb-5 text-5xl font-bold capitalize font-serif">
              {title}
            </h1>
            <p className="mb-5 capitalize font-mono"> {desc}</p> <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
