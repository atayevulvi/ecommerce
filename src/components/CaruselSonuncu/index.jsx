/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function CaruselSonuncu({ data }) {
    console.log(data);
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: false,
                    enabled: false
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}


                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(li => (
                    <SwiperSlide key={li.id}>

                        <ul style={{transform:'translate(-190px)'}} className="product-list">
                            <li>
                                <div className="offer-product">
                                    <Link
                                        to="product-left-thumbnail"
                                        className="offer-image"
                                    >
                                        <img
                                            src={li.image}
                                            className=" lazyload"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="offer-detail">
                                        <div>
                                            <Link
                                                to="product-left-thumbnail"
                                                className="text-title"
                                            >
                                                <h6 style={{ fontWeight: '400' }} className="name">Tuffets Whole Wheat Bread</h6>
                                            </Link>
                                            <span>500 G</span>
                                            <h6 className="price theme-color">$ 10.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="offer-product">
                                    <Link
                                        to="product-left-thumbnail"
                                        className="offer-image"
                                    >
                                        <img
                                            src={li.image}
                                            className=" lazyload"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="offer-detail">
                                        <div>
                                            <Link
                                                to="product-left-thumbnail"
                                                className="text-title"
                                            >
                                                <h6 style={{ fontWeight: '400' }} className="name">Potato</h6>
                                            </Link>
                                            <span>500 G</span>
                                            <h6 className="price theme-color">$ 10.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="offer-product">
                                    <Link
                                        to="product-left-thumbnail"
                                        className="offer-image"
                                    >
                                        <img
                                            src={li.image}
                                            className="lazyload"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="offer-detail">
                                        <div>
                                            <Link
                                                to="product-left-thumbnail"
                                                className="text-title"
                                            >
                                                <h6 style={{ fontWeight: '400' }} className="name">Green Chilli</h6>
                                            </Link>
                                            <span>200 G</span>
                                            <h6 className="price theme-color">$ 10.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="offer-product">
                                    <Link
                                        to="product-left-thumbnail"
                                        className="offer-image"
                                    >
                                        <img
                                            src={li.image}
                                            className=" lazyload"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="offer-detail">
                                        <div>
                                            <Link
                                                to="product-left-thumbnail"
                                                className="text-title"
                                            >
                                                <h6 style={{ fontWeight: '400' }} className="name">Muffets Burger Bun</h6>
                                            </Link>
                                            <span>150 G</span>
                                            <h6 className="price theme-color">$ 10.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
