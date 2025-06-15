import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MobileImageSwiper = ({ imageUrl, title }) => (
  <div className="block md:hidden">
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="!rounded-none"
    >
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={imageUrl}
              alt={`${i + 1} of ${title}`}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);
export default MobileImageSwiper;
