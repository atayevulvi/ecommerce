/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import DealBoxModal from "../../components/DealBoxModal";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import LocationModal from "../../components/LocationModal";
import QuickView from "../../components/QuickView";
import TapToStart from "../../components/TapToStart";
import img1 from '../../assets/images/vegetable/banner/1.jpg'
import qoz from '../../assets/images/vegetable/banner/2.jpg'
import second from '../../assets/images/vegetable/banner/3.jpg'
import { BsArrowRight } from 'react-icons/bs'
import carrot from '../../assets/images/svgler/vegetable (1).svg'
import cap from '../../assets/images/svgler/cup (2).svg'
import meat from '../../assets/images/svgler/meats (1).svg'
import breakfast from '../../assets/images/svgler/breakfast.svg'
import snow from '../../assets/images/svgler/grocery (1).svg'
import biscuit from '../../assets/images/svgler/biscuit (1).svg'
import frozen from '../../assets/images/svgler/frozen (1).svg'
import drink from '../../assets/images/svgler/drink (1).svg'
import milk from '../../assets/images/svgler/milk (1).svg'
import pet from '../../assets/images/svgler/pet.svg'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'
import kitchen from '../../assets/images/vegetable/banner/9.jpg'
import mashroom from '../../assets/images/vegetable/banner/10.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
import arxafon from '../../assets/images/vegetable/banner/15.jpg'
import juice from '../../assets/images/vegetable/banner/12.jpg'
import galses from '../../assets/images/vegetable/banner/13.jpg'
import ssekil from '../../assets/images/vegetable/product/23.png'
import ssekil1 from '../../assets/images/vegetable/product/24.png'
import ssekil2 from '../../assets/images/vegetable/product/25.png'
import ssekil3 from '../../assets/images/vegetable/product/26.png'
import onlyfrom from '../../assets/images/vegetable/banner/8.jpg'
import fresh from '../../assets/images/vegetable/banner/11.jpg'
import vegetabless from '../../assets/images/vegetable/banner/14.jpg'
import qarisiq1 from '../../assets/images/vegetable/blog/1.jpg'
import qarisiq2 from '../../assets/images/vegetable/blog/2.jpg'
import girl from '../../assets/images/vegetable/review/1.jpg'
import { SlEnvolope } from 'react-icons/sl'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import CountdownComponent from "../../components/CountdownComponent";
import CarouselComponent from "../../components/CarouselComponent";
import { useEffect, useState } from "react";
import { getCategoryCarousels } from "../../services/getRequest";
import { getSwiperCarusel } from '../../services/getRequest'
import { getcaruselsilde } from '../../services/getRequest'
import Cookies from "../../components/Cookies";
import { LiaLuggageCartSolid } from 'react-icons/lia'
import SwiperCarusel from "../../components/SwiperCarusel";
import CaruselSilde from "../../components/CaruselSilde";
import { getcaruselsurusgen } from '../../services/getRequest'
import CaruselSurusgen from '../../components/CaruselSurusgen'
import { getcaruselsonuncu } from '../../services/getRequest'
import CaruselSonuncu from "../../components/CaruselSonuncu";
/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const [cookieData, setCookieData] = useState(true)

  const [caruselson, setCaruselSon] = useState([])

  const sonuncu = async () => {
    try {
      const res = await getcaruselsonuncu()
      setCaruselSon(res)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    sonuncu()
  },[])

const [caruselsurusgen, setCaruselSurusgen] = useState([])

const surusgen = async () => {
  try {
    const res = await getcaruselsurusgen()
    setCaruselSurusgen(res)
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  surusgen()
}, [])

const [caruselSilde, setCaruselSilde] = useState([])

const carusel = async () => {
  try {
    const res = await getcaruselsilde()
    setCaruselSilde(res)

  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  carusel()
}, [])


const [swipercox, setSwiperCox] = useState([])
const getswiper = async () => {
  try {
    const req = await getSwiperCarusel()
    setSwiperCox(req)
  } catch (error) {
    console.log(error.message);
  }
}
useEffect(() => {
  getswiper()
}, [])

const [categoryCarousel, setCategoryCarousel] = useState([])
const getCarousels = async () => {
  try {
    const response = await getCategoryCarousels();
    setCategoryCarousel(response)
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  getCarousels();
}, [])
return (
  <>
    <Header />
    {/* Home Section Start */}
    {<section className="home-section pt-2">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-xl-8 ratio_65">
            <div className="home-contain h-100">
              <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${img1})` }} className="h-100">

              </div>
              <div className="home-detail p-center-left w-75">
                <div>
                  <h6>
                    Exclusive offer <span>30% Off</span>
                  </h6>
                  <h1 className="text-uppercase">
                    Stay home &amp; delivered your{" "}
                    <span className="xdaily">Daily Needs</span>
                  </h1>
                  <p className="w-75 d-none d-sm-block">
                    Vegetables contain many vitamins and minerals that are good
                    for your health.
                  </p>
                  <button
                    className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
                  >
                    Shop Now <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 ratio_65">
            <div className="row g-4">
              <div className="col-xl-12 col-md-6">
                <div className="home-contain">
                  <img
                    src={qoz}
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="home-detail p-center-left home-p-sm w-75">
                    <div>
                      <h2 className="mt-0 text-danger">
                        45% <span className="discount text-title">OFF</span>
                      </h2>
                      <h3 className="theme-color">Nut Collection</h3>
                      <p className="w-75">
                        We deliver organic vegetables &amp; fruits
                      </p>
                      <Link to="shop-left-sidebar" className="shop-button">
                        Shop Now <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6">
                <div className="home-contain">
                  <img
                    src={second}
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="home-detail p-center-left home-p-sm w-75">
                    <div>
                      <h3 className="mt-0 theme-color fw-bold">Healthy Food</h3>
                      <h4 className="text-danger">Organic Market</h4>
                      <p className="organic">
                        Start your daily shopping with some Organic food
                      </p>
                      <Link to="shop-left-sidebar" className="shop-button">
                        Shop Now <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
    {/* Home Section End */}
    {/* Banner Section Start */}
    {<section className="banner-section ratio_60 wow fadeInUp">
      <div className="container-fluid-lg">
        <div style={{ display: 'flex' }} className="banner-slider">
          {
            categoryCarousel.length > 0 && <CarouselComponent data={categoryCarousel} />
          }
        </div>
      </div>
    </section>}
    {/* Banner Section End */}
    {/* Product Section Start */}
    {<section className="product-section">
      <div className="container-fluid-lg">
        <div className="row g-sm-4 g-3">
          <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
            <div className="p-sticky">
              <div className="category-menu">
                <h3>Category</h3>
                <ul>
                  <li>
                    <div className="category-list">
                      <img
                        src={carrot}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">
                          Vegetables &amp; Fruit
                        </Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={cap}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Beverages</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={meat}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Meats &amp; Seafood</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={breakfast}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Breakfast &amp; Dairy</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={frozen}
                        className="lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Frozen Foods</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={biscuit}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Biscuits &amp; Snacks</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={snow}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Grocery &amp; Staples</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={drink}
                        className="lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">
                          Wines &amp; Alcohol Drinks
                        </Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <img
                        src={milk}
                        className="lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Milk &amp; Dairies</Link>
                      </h5>
                    </div>
                  </li>
                  <li className="pb-30">
                    <div className="category-list">
                      <img
                        src={pet}
                        className=" lazyload"
                        alt=""
                      />
                      <h5>
                        <Link to="shop-left-sidebar">Pet Foods</Link>
                      </h5>
                    </div>
                  </li>
                </ul>
                <ul className="value-list">
                  <li>
                    <div className="category-list">
                      <h5 className="ms-0 text-title">
                        <Link to="shop-left-sidebar">Value of the Day</Link>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="category-list">
                      <h5 className="ms-0 text-title">
                        <Link to="shop-left-sidebar">Top 50 Offers</Link>
                      </h5>
                    </div>
                  </li>
                  <li className="mb-0">
                    <div className="category-list">
                      <h5 className="ms-0 text-title">
                        <Link to="shop-left-sidebar">New Arrivals</Link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ratio_156 section-t-space">
                <div className="home-contain">
                  <img
                    src={onlyfrom}
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="home-detail p-top-left home-p-medium">
                    <div>
                      <h6 className="text-yellow home-banner">Seafood</h6>
                      <h3 className="text-uppercase fw-normal">
                        <span className="theme-color fw-bold">Freshes</span>{" "}
                        Products
                      </h3>
                      <h3 className="fw-light">every hour</h3>
                      <button style={{ color: 'white' }}
                        className="btn btn-animation btn-md mend-auto"
                      >
                        Shop Now <BsArrowRightShort style={{ fontSize: '25px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ratio_medium section-t-space">
                <div className="home-contain ">
                  <img
                    src={fresh}
                    className="img-fluid  lazyload"
                    alt=""
                  />
                  <div className="home-detail p-top-left home-p-medium">
                    <div>
                      <h4 className="text-yellow text-exo home-banner">
                        Organic
                      </h4>
                      <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                        fresh
                      </h2>
                      <h2 className="text-uppercase fw-normal text-title">
                        Vegetables
                      </h2>
                      <p className="mb-3">Super Offer to 50% Off</p>
                      <button style={{ color: 'white' }}
                        className="btn btn-animation btn-md mend-auto"
                      >
                        Shop Now <BsArrowRightShort style={{ fontSize: '25px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-t-space">
                <div className="category-menu">
                  <h3>Trending Products</h3>
                  <ul className="product-list border-0 p-0 d-block">
                    <li>
                      <div className="offer-product">
                        <Link
                          to="product-left-thumbnail"
                          className="offer-image"
                        >
                          <img
                            src={ssekil}
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
                              <h6 style={{ fontWeight: '400' }} className="name">Meatigo Premium Goat Curry</h6>
                            </Link>
                            <span>450 G</span>
                            <h6 style={{ fontWeight: '400' }} className="price theme-color">$ 70.00</h6>
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
                            src={ssekil1}
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
                              <h6 style={{ fontWeight: '400' }} className="name">
                                Dates Medjoul Premium Imported
                              </h6>
                            </Link>
                            <span style={{ fontWeight: '400' }} >450 G</span>
                            <h6 style={{ fontWeight: '400' }} className="price theme-color">$ 40.00</h6>
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
                            src={ssekil2}
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
                              <h6 style={{ fontWeight: '400' }} className="name">Good Life Walnut Kernels</h6>
                            </Link>
                            <span style={{ fontWeight: '400' }} >200 G</span>
                            <h6 style={{ fontWeight: '400' }} className="price theme-color">$ 52.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="offer-product">
                        <Link
                          to="product-left-thumbnail"
                          className="offer-image"
                        >
                          <img
                            src={ssekil3}
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
                              <h6 style={{ fontWeight: '400' }} className="name">Apple Red Premium Imported</h6>
                            </Link>
                            <span style={{ fontWeight: '400' }} >1 KG</span>
                            <h6 style={{ fontWeight: '400' }} className="price theme-color">$ 80.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-t-space">
                <div className="category-menu">
                  <h3>Customer Comment</h3>
                  <div className="review-box">
                    <div className="review-contain">
                      <h5 className="w-75">
                        We Care About Our Customer Experience
                      </h5>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.
                      </p>
                    </div>
                    <div className="review-profile">
                      <div className="review-image">
                        <img
                          src={girl}
                          className="img-fluid  lazyload"
                          alt=""
                        />
                      </div>
                      <div className="review-detail">
                        <h5 style={{ fontWeight: '500' }}>Tina Mcdonnale</h5>
                        <h6>Sale Manager</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8">
            <div className="title title-flex">
              <div>
                <h2>Top Save Today</h2>
                <span className="title-leaf">
                  <FaCanadianMapleLeaf />
                </span>
                <p>
                  Don't miss this opportunity at a special discount just for this
                  week.
                </p>
              </div>
              <div className="timing-box">
                <div className="timing" style={{ width: '240px', height: '40px', display: 'flex', justifyContent: 'space-evenly' }}>
                  <BsClock />
                  <h6 className="name" style={{ marginTop: '10px', fontSize: '12px' }}>Expires in :</h6>
                  <CountdownComponent />
                </div>
              </div>
            </div>
            <div className="section-b-space">
              <div className="product-border border-row overflow-hidden">
                <div style={{ display: 'flex' }} className="product-box-slider no-arrow">
                  {
                    swipercox.length > 0 && <SwiperCarusel data={swipercox} />
                  }
                </div>
              </div>
            </div>
            <div className="title">
              <h2>Bowse by Categories</h2>
              <span className="title-leaf">
                <FaCanadianMapleLeaf />
              </span>
              <p>Top Categories Of The Week</p>
            </div>
            <div style={{ display: 'flex' }} className="category-slider-2 product-wrapper no-arrow">

              {
                caruselSilde.length > 0 && <CaruselSilde data={caruselSilde} />
              }
            </div>
            <div className="section-t-space section-b-space">
              <div className="row g-md-4 g-3">
                <div className="col-md-6">
                  <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${kitchen})` }} className="banner-contain  ">

                    <div className="banner-details p-center-left p-4">
                      <div>
                        <h3 style={{ fontWeight: '400' }} className="text-exo">50% offer</h3>
                        <h4 className="text-russo fw-normal theme-color mb-2">
                          Testy Mushrooms
                        </h4>
                        <button style={{ color: 'white', width: '105px', height: '40px' }}
                          className="btn btn-animation btn-sm mend-auto"
                        >
                          Shop Now <BsArrowRightShort style={{ fontSize: '25px' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${mashroom})` }} className="banner-contain">

                    <div className="banner-details p-center-left p-4">
                      <div>
                        <h3 style={{ fontWeight: '400' }} className="text-exo">50% offer</h3>
                        <h4 className="text-russo fw-normal theme-color mb-2">
                          Fresh MEAT
                        </h4>
                        <button style={{ color: 'white', width: '105px', height: '40px' }}
                          className="btn btn-animation btn-sm mend-auto"
                        >
                          Shop Now <BsArrowRightShort style={{ fontSize: '25px' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title d-block">
              <h2>Food Cupboard</h2>
              <span className="title-leaf">
                <FaCanadianMapleLeaf style={{ fontSize: '20px' }} />
              </span>
              <p>A virtual assistant collects the products from your list</p>
            </div>
            <div className="product-border overflow-hidden wow fadeInUp">
              <div style={{ display: 'flex' }} className="product-box-slider no-arrow">
                {
                  caruselsurusgen.length > 0 && <CaruselSurusgen data={caruselsurusgen} />
                }

              </div>
            </div>
            <div className="section-t-space">
              <div style={{ color: 'white', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${arxafon})` }} className="banner-contain">

                <div className="banner-details p-center p-4 text-white text-center">
                  <div>
                    <h3 className="lh-base fw-bold offer-text">
                      Get $3 Cashback! Min Order of $30
                    </h3>
                    <h6 className="coupon-code">Use Code : GROCERY1920</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-t-space section-b-space">
              <div className="row g-md-4 g-3">
                <div className="col-xxl-8 col-xl-12 col-md-7">
                  <div style={{ color: 'white', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${juice})` }} className="banner-contain">

                    <div className="banner-details p-center-left p-4">
                      <div>
                        <h2 className="text-kaushan fw-normal theme-color">
                          Get Ready To
                        </h2>
                        <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                        <p className="text-content banner-text">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate.
                        </p>
                        <button style={{ width: '110px', height: '40px', color: 'white' }}
                          className="btn btn-animation btn-sm mend-auto"
                        >
                          Shop Now <BsArrowRightShort style={{ fontSize: '25px' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: 'white', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${galses})` }} className="col-xxl-4 col-xl-12 col-md-5">
                  <Link
                    to="shop-left-sidebar"
                    className="banner-contain hover-effect h-100"
                  >

                    <div className="banner-details p-center-left p-4 h-100">
                      <div>
                        <h2 className="text-kaushan fw-normal text-danger">
                          20% Off
                        </h2>
                        <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                        <h3 className="fw-normal product-name text-title">
                          Product
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="title d-block">
              <div>
                <h2 style={{ fontWeight: '400' }}>Our best Seller</h2>
                <span className="title-leaf">
                  <FaCanadianMapleLeaf style={{ fontSize: '20px' }} />
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
            </div>
            <div style={{ display: 'flex' }} className="best-selling-slider product-wrapper wow fadeInUp">
              {
                caruselson.length>0 && <CaruselSonuncu data={caruselson}/>
              }
            </div>
            <div className="section-t-space">
              <div className="banner-contain">

                <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${vegetabless})` }} className="banner-details p-center banner-b-space w-100 text-center">
                  <div >
                    <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                      SUMMER
                    </h6>
                    <h2 style={{ fontWeight: '400' }} className="banner-title">VEGETABLE</h2>
                    <h5 className="lh-sm mx-auto mt-1 text-content">
                      Save up to 5% OFF
                    </h5>
                    <button style={{ color: 'white', width: '110px', height: '40px' }}
                      className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2"
                    >
                      Shop Now <BsArrowRight style={{ fontSize: '20px' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="title section-t-space">
              <h2>Featured Blog</h2>
              <span className="title-leaf">
                <FaCanadianMapleLeaf style={{ fontSize: '20px' }} />
              </span>
              <p>A virtual assistant collects the products from your list</p>
            </div>
            <div style={{ display: 'flex' }} className="slider-3-blog ratio_65 no-arrow product-wrapper">
              <div >
                <div className="blog-box">
                  <div style={{ width: '95%' }} className="blog-box-image">
                    <Link to="blog-detail" className="blog-image">
                      <img
                        src={qarisiq1}
                        className="bg-img  lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="blog-detail" className="blog-detail">
                    <h6 style={{ fontWeight: '400' }}>20 March, 2022</h6>
                    <h5 style={{ fontWeight: '600' }}>Fresh Vegetable Online</h5>
                  </Link>
                </div>
              </div>
              <div>
                <div className="blog-box">
                  <div style={{ width: '95%' }} className="blog-box-image">
                    <Link to="blog-detail" className="blog-image">
                      <img
                        src={qarisiq2}
                        className="bg-img  lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="blog-detail" className="blog-detail">
                    <h6 style={{ fontWeight: '400' }}>10 April, 2022</h6>
                    <h5 style={{ fontWeight: '600' }}>Fresh Combo Fruit</h5>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >}
    {/* Product Section End */}
    {/* Newsletter Section Start */}
    {
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2">
            <div className="newsletter-contain py-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                    <div className="newsletter-detail">
                      <h2>Join our newsletter and get...</h2>
                      <h5>$20 discount for your first order</h5>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Email"
                        />
                        <SlEnvolope color="#2caf96" style={{ backgroundColor: '#e6f6f3', transform: 'translate(13px,-32px)' }} />
                        <button style={{ transform: 'translate(1px,-28px)' }} className="sub-btn  btn-animation">
                          <span className="d-sm-block d-none">Subscribe</span>
                          <FiArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
    {/* Newsletter Section End */}
    <Footer />
    {<QuickView />}
    {<LocationModal />}
    {/* Cookie Bar Box Start */}
    <Cookies cookieData={cookieData} setCookieData={setCookieData} />
    {/* Cookie Bar Box End */}
    {
      <><DealBoxModal /><TapToStart /><div className="setting-box buy-now mt-2">
        <Link
          className="btn setting-button"
          to="https://1.envato.market/gbvkjA"
          target="_blank" rel="noreferrer"
        >
          <LiaLuggageCartSolid fontSize={'30px'} />
        </Link>
      </div></>
    }
    {/* Bg overlay Start */}
    {<div className="bg-overlay" />}
    {/* Bg overlay End */}
  </>

)
}
