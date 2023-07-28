/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react';

export default function CaruselSurusgen({ data }) {

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

  const addToBasket = () => {
    setShow(true)
  }

  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
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

            <div className="col-12 px-0">
              <div className="product-box">
                <div className="product-image">
                  <Link to="product-left-thumbnail">
                    <img
                      src={sli.image}
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
                      <Link to="wishlist" className="notifi-wishlist">
                        <AiOutlineHeart style={{ fontSize: '20px' }} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-detail">
                  <Link to="product-left-thumbnail">
                    <h6 className="name h-100">Chocalate Powder</h6>
                  </Link>
                  <h5 className="sold text-content">
                    <span className="theme-color price">$26.69</span>
                    <del>28.56</del>
                  </h5>
                  <div style={{ transform: 'translate(-32px)' }} className="product-rating mt-sm-2 mt-1">
                    <ul className="rating">
                      <li>
                        <AiFillStar style={{ color: 'yellow', fontSize: '17px' }} />
                      </li>
                      <li>
                        <AiFillStar style={{ color: 'yellow', fontSize: '17px' }} />
                      </li>
                      <li>
                        <AiFillStar style={{ color: 'yellow', fontSize: '17px' }} />
                      </li>
                      <li>
                        <AiFillStar style={{ color: 'yellow', fontSize: '17px' }} />
                      </li>
                      <li>
                        <AiOutlineStar style={{ color: 'yellow', fontSize: '17px' }} />
                      </li>
                    </ul>
                    <h6 style={{ marginBottom: '15px' }} className="theme-color">In Stock</h6>
                  </div>
                  <div className="add-to-cart-box d-flex align-items-center justify-content-between">
                    <span onClick={decrementCount} style={{ transform: 'translate(-5px,-18px)' }} className={`${show ? 'd-flex' : 'd-none'} add-icon`}>
                      <AiOutlineMinus style={{transform:'translate(-20px,20px)'}}/>
                    </span>
                    <input type="number" value={count} style={{ width: 50 }} className={show ? 'd-flex' : 'd-none'} />
                    <button className={`${!show ? 'd-flex' : 'd-none'} btn btn-add-cart addcart-button`} onClick={addToBasket}>
                      Add
                    </button>
                    <span onClick={incrementCount} style={{ transform: 'translate(-5px,-18px)' }} className="add-icon">
                      <AiOutlinePlus style={{transform:'translate(-20px,20px)'}}/>
                    </span>
                    <div className="cart_qty qty-box">
                      <div className="input-group">
                        <button
                          type="button"
                          className="qty-left-minus"
                          data-type="minus"
                          data-field=""
                        >
                          <AiOutlinePlus />
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
                          <AiOutlineMinus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



