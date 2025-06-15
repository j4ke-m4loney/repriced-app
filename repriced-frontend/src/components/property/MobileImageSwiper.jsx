import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MobileImageSwiper = ({ imageUrl, title }) => (
  <div className="block md:hidden h-[220px]">
    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // 👈 This tells Swiper where to render the bullets
        }}
        className="custom-swiper"
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
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 swiper-pagination bg-white/70 px-3 py-1 rounded-full shadow-sm border-red-600" />
    </div>
  </div>
);
export default MobileImageSwiper;
