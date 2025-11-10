import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = ({ children }) => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
