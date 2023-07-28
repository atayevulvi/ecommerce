/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineMinus } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react';



export default function SwiperCarusel({ data }) {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)

    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        if (count < 1) {
            setShow(false)
        } else {
            setCount(count - 1)
        }
    }

    const addtoBasket = () => {
        setShow(true)
    }
    return (
        <>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper flex-row"
            >
                {data.map(us => (
                    <SwiperSlide style={{ gap: 10 }} key={us.id}>
                        <div className="row m-0">
                            <div className="col-12 px-0">
                                <div className="product-box">
                                    <div className="product-image">
                                        <Link to="product-left-thumbnail">
                                            <img
                                                src={us.image}
                                                className="img-fluid  lazyload"
                                                alt=""
                                            />
                                        </Link>
                                        <ul className="product-option">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="View"
                                            >
                                                <Link
                                                    to=""
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#view"
                                                >
                                                    <AiOutlineEye style={{ fontSize: '20px' }} />
                                                </Link>
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Compare"
                                            >
                                                <Link to="compare">
                                                    <FiRefreshCcw style={{ fontSize: '20px' }} />
                                                </Link>
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Wishlist"
                                            >
                                                <Link
                                                    to="wishlist"
                                                    className="notifi-wishlist"
                                                >
                                                    <AiOutlineHeart style={{ fontSize: '20px' }} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-detail">
                                        <Link to="product-left-thumbnail">
                                            <h6 className="name">
                                                Fantasy Crunchy Choco Chip Cookies
                                            </h6>
                                        </Link>
                                        <h5 className="sold text-content">
                                            <span className="theme-color price">$26.69</span>
                                            <del>28.56</del>
                                        </h5>
                                        <div style={{ transform: 'translate(-30px)' }} className="product-rating mt-sm-2 mt-1">
                                            <ul className="rating">
                                                <li >
                                                    <AiFillStar style={{ color: 'yellow', fontSize: '15px' }} />
                                                </li>
                                                <li>
                                                    <AiFillStar style={{ color: 'yellow', fontSize: '15px' }} />
                                                </li>
                                                <li>
                                                    <AiFillStar style={{ color: 'yellow', fontSize: '15px' }} />
                                                </li>
                                                <li>
                                                    <AiFillStar style={{ color: 'yellow', fontSize: '15px' }} />
                                                </li>
                                                <li>

                                                    <AiOutlineStar style={{ color: 'yellow', fontSize: '15px' }} />

                                                </li>
                                            </ul>
                                            <h6 style={{ marginBottom: '15px' }} className="theme-color">In Stock</h6>
                                        </div>
                                        <div className="add-to-cart-box">
                                            <span onClick={decrementCount} style={{ transform: 'translate(-5px,-18px)' }} className={`${show?'d-flex':'d-none'} add-icon`}>
                                                <AiOutlineMinus />
                                            </span>
                                            <input type="text" value={count} className={show ? 'd-flex':'d-none'}/>
                                            <button onClick={addtoBasket} className='btn btn-add-cart addcart-button'>
                                                Add
                                            </button>
                                            <span onClick={incrementCount} style={{ transform: 'translate(-5px,-18px)' }} className="add-icon">
                                                <AiOutlinePlus />
                                            </span>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group">
                                                    <button
                                                        type="button"
                                                        className="qty-left-minus"
                                                        data-type="minus"
                                                        data-field=""
                                                    >
                                                        <i
                                                            className="fa fa-minus"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                    <input
                                                        className="form-control input-number qty-input"
                                                        type="text"
                                                        name="quantity"
                                                        defaultValue={0}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="qty-right-plus"
                                                        data-type="plus"
                                                        data-field=""
                                                    >
                                                        <i
                                                            className="fa fa-plus"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))

                }


            </Swiper>
        </>
    );
}