import FoodCart from "../../../Components/FoodCard/FoodCart";
import { Pagination } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Function to chunk items into groups of 6
  const chunkItems = (items, size) => {
    const chunkedItems = [];
    for (let i = 0; i < items?.length; i += size) {
      chunkedItems.push(items.slice(i, i + size));
    }
    return chunkedItems;
  };

  const chunkedItems = chunkItems(items, 6);

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10 my-16">
              {chunk.map((item) => (
                <FoodCart key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
