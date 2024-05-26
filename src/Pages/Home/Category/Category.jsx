import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
      <SectionTitle heading="Order Online" subHeading="From 11AM to 10PM" />
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-3xl uppercase text-gray-200 font-bold text-center -mt-16 -ml-20">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-3xl uppercase text-gray-200 font-bold text-center -mt-16 -ml-20">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-3xl uppercase text-gray-200 font-bold text-center -mt-16 -ml-20">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-3xl uppercase text-gray-200 font-bold text-center -mt-16 -ml-20">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-3xl uppercase text-gray-200 font-bold text-center -mt-16 -ml-20">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
