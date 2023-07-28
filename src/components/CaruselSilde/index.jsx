/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import { Pagination, Autoplay,Navigation  } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function CaruselSilde({ data }) {
    console.log(data);
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: false,
                    enabled: false
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    
                }}


                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(sli => (
                    <SwiperSlide key={sli.id}>
                        <div>
                            <Link
                                to="shop-left-sidebar"
                                className="category-box category-dark"
                            >
                                <div>
                                    <img
                                        src={sli.image}
                                        className=" lazyload"
                                        alt=""
                                    />
                                    <h5>Vegetables &amp; Fruit</h5>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
