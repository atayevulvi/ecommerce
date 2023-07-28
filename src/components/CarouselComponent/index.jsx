/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight } from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function CarouselComponent({ data }) {
  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false,
          enabled: false
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}


        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map(sli => (
          <SwiperSlide key={sli.id}>
            <div className="banner-contain">
              <img
                src={sli.image}
                className="bg-img  lazyload"
                alt=""
              />
              <div className="banner-details">
                <div className="banner-box">
                  <h6 className="number" style={{transform:'translateX(-50px)'}}>{sli?.discount}</h6>
                  <h5 >{sli?.title}</h5>
                  <h6 className="text-content">
                    {sli?.subtitle}
                  </h6>
                </div>
                <Link
                  to={sli?.url}
                  className="banner-button text-white"
                >
                  Shop Now <BsArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
