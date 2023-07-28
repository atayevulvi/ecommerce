import MobileMenu from "../MobileMenu";
import { NavLink } from "react-router-dom";
import Faskart from '../../../assets/images/logo/1.png'
import { GoLocation } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'
import { FiPhoneCall } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import cookie from '../../../assets/images/vegetable/product/1.png'
import { GrFormClose } from 'react-icons/gr'
import bottle from '../../../assets/images/vegetable/product/2.png'
import { FiUser } from 'react-icons/fi'
import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import { FiZap } from 'react-icons/fi'

import Dropdown from '../../Drowpdown'
import { CiLocationOn } from 'react-icons/ci'
import { BsChevronDown } from 'react-icons/bs'
import AntDropdownHome from "../../AntDropdownHome";
import AntDropdownShop from '../../AntDropdownShop'
import AntDropdownProduct from '../../AntDropdownProduct';
import DropdownBlog from '../../DropDownBlog'
import AntDropdownSeller from '../../AntDropdownSeller'
import AntDropdownPages from '../../AntDropdownPages'
import { useState } from "react";
import LocationModal from "../../LocationModal";
export default function Header() {
    const [gorunen, setGorunen] = useState(false);
    const handleClose = () => setGorunen(false);
    const handleShow = () => setGorunen(true);
    return (
        <>
            {/* Loader Start */}

            {/* Loader End */}
            {/* Header Start */}
            <header className="pb-md-4 pb-0">
                <div className="header-top">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-3 d-xxl-block d-none">
                                <div className="top-left-header">
                                    <GoLocation />
                                    <span className="text-white">
                                        1418 Riverwood Drive, CA 96052, US
                                    </span>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                                <div className="header-offer">
                                    <div className="notification-slider">
                                        <div>
                                            <div className="timer-notification">
                                                <h6>
                                                    <strong className="me-1">Welcome to Fastkart!</strong>Wrap
                                                    new offers/gift every signle day on Weekends.
                                                    <strong className="ms-1">New Coupon Code: Fast024</strong>
                                                </h6>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="timer-notification">
                                                <h6>
                                                    Something you love is now on sale!
                                                    <NavLink to="/shop-left-sidebar" className="text-white">
                                                        Buy Now !
                                                    </NavLink>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <ul className="about-list right-nav-about">
                                    <Dropdown />
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button
                                                className="btn dropdown-toggle"
                                                type="button"
                                                id="select-dollar"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span>USD</span>
                                            </button>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                                                aria-labelledby="select-dollar"
                                            >
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        id="aud"
                                                        to="#"
                                                    >
                                                        AUD
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        id="eur"
                                                        to="#"
                                                    >
                                                        EUR
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        id="cny"
                                                        to="#"
                                                    >
                                                        CNY
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-nav top-header sticky-header">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-top">
                                    <button
                                        className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#primaryMenu"
                                    >
                                        <span className="navbar-toggler-icon">
                                            <i className="fa-solid fa-bars" />
                                        </span>
                                    </button>
                                    <NavLink to="/" className="web-logo nav-logo">
                                        <img
                                            src={Faskart}
                                            className="img-fluid  lazyload"
                                            alt=""
                                        />
                                    </NavLink>
                                     <LocationModal gorunen={gorunen} handleClose={handleClose} />
                                    <div className="middle-box">
                                        <div className="location-box">
                                            <button onClick={handleShow}
                                                className="btn location-button"
                                            >

                                                <span className="location-arrow">
                                                    <CiLocationOn />
                                                </span>
                                                <span className="locat-name">Your Location</span>
                                                <BsChevronDown style={{ marginLeft: '8px', color: 'grey' }} />

                                            </button>
                                        </div>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <input
                                                    style={{ height: '51px' }}
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="I'm searching for..."
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <button style={{ height: '51px' }} className="btn" type="button" id="button-addon2">
                                                    <FiSearch style={{ fontSize: '20' }} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightside-box">
                                        <div className="search-full">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i data-feather="search" className="font-light" />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control search-type"
                                                    placeholder="Search here.."
                                                />
                                                <span className="input-group-text close-search">
                                                    <i data-feather="x" className="font-light" />
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="right-side-menu">
                                            <li className="right-side">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <div className="search-box">
                                                            <i data-feather="search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side">
                                                <NavLink to="/contact" className="delivery-login-box">
                                                    <div className="delivery-icon" style={{ color: 'black' }}>
                                                        <FiPhoneCall style={{ fontSize: '25' }} />
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>24/7 Delivery</h6>
                                                        <h5>+91 888 104 2340</h5>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li className="right-side">
                                                <NavLink
                                                    to="/wishlist"
                                                    className="btn p-0 position-relative header-wishlist"
                                                >
                                                    <FaRegHeart style={{ fontSize: '25' }} />
                                                </NavLink>
                                            </li>
                                            <li className="right-side">
                                                <div className="onhover-dropdown header-badge">
                                                    <button
                                                        type="button"
                                                        className="btn p-0 position-relative header-wishlist"
                                                    >
                                                        <FiShoppingCart style={{ fontSize: '25' }} />
                                                        <span className="position-absolute top-0 start-100 translate-middle badge">
                                                            2
                                                            <span className="visually-hidden">
                                                                unread messages
                                                            </span>
                                                        </span>
                                                    </button>
                                                    <div className="onhover-div">
                                                        <ul className="cart-list">
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <NavLink
                                                                        to="/product-left-thumbnail"
                                                                        className="drop-image"
                                                                    >
                                                                        <img 
                                                                            style={{ width: '100px',transform:'translateX(-30px)' }}
                                                                            src={cookie}
                                                                            className=" lazyload"
                                                                            alt=""
                                                                        />
                                                                    </NavLink>
                                                                    <div className="drop-contain">
                                                                        <NavLink to="/product-left-thumbnail">
                                                                            <h5 style={{ width: '300' }}>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                        </NavLink>
                                                                        <h6>
                                                                            <span>1 x</span><span> $80.58</span>
                                                                        </h6>
                                                                        <button className="close-button close_button">
                                                                            <GrFormClose style={{ fontSize: '20' }} />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="product-box-contain">
                                                                
                                                                <div className="drop-cart">
                                                                    
                                                                    <NavLink 
                                                                        to="/product-left-thumbnail"
                                                                        className="drop-image"
                                                                    >
                                                                        <img style={{width: '100px',transform:'translateX(-30px'}}
                                                                            src={bottle}
                                                                            className=" lazyload"
                                                                            alt=""
                                                                        />
                                                                    </NavLink>
                                                                    <div className="drop-contain">
                                                                        <NavLink to="/product-left-thumbnail">
                                                                            <h5>
                                                                                Peanut Butter Bite Premium Butter Cookies
                                                                                600 g
                                                                            </h5>
                                                                        </NavLink>
                                                                        <h6>
                                                                            <span>1 x</span> $25.68
                                                                        </h6>
                                                                        <button className="close-button close_button">
                                                                            <GrFormClose style={{ fontSize: '20' }}/>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="price-box">
                                                            <h5>Total :</h5>
                                                            <h4 className="theme-color ">$106.58</h4>
                                                        </div>
                                                        <div className="button-group">
                                                            <NavLink
                                                                to="/cart"
                                                                className="btn btn-sm cart-button"
                                                            >
                                                                View Cart
                                                            </NavLink>
                                                            <NavLink
                                                                to="/checkout"
                                                                className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                                                            >
                                                                <span style={{ color: 'white' }}>Checkout</span>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side onhover-dropdown">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <FiUser style={{ fontSize: '25' }} />
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Hello,</h6>
                                                        <h5>My Account</h5>
                                                    </div>
                                                </div>
                                                <div className="onhover-div onhover-div-login">
                                                    <ul style={{ transform: 'translateX(-30px)' }} className="user-box-name" >
                                                        <li className="product-box-contain">
                                                            <i />
                                                            <NavLink style={{ textDecoration: 'none' }} to="/sign-in">Log In</NavLink>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <NavLink style={{ textDecoration: 'none' }} to="/sign-up">Register</NavLink>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <NavLink style={{ width: '106px', textDecoration: 'none' }} to="/forgot">Forgot Password</NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-nav">
                                <div className="header-nav-left">
                                    <button className="dropdown-category">
                                        <BsReverseListColumnsReverse style={{ marginRight: '10', fontSize: '20' }} />
                                        <span>All Categories</span>
                                    </button>
                                    <div className="category-dropdown">
                                        <div className="category-title">
                                            <h5>Categories</h5>
                                            <button
                                                type="button"
                                                className="btn p-0 close-button text-content"
                                            >
                                                <i className="fa-solid fa-xmark" />
                                            </button>
                                        </div>
                                        <ul className="category-list">
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                                                        alt=""
                                                    />
                                                    <h6>Vegetables &amp; Fruit</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translate(50px,-8px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box" >
                                                            <h5>Organic Vegetables</h5>
                                                        </div>
                                                        <ul style={{ marginLeft: '-29px' }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Potato &amp; Tomato</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Cucumber &amp; Capsicum
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Leafy Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Root Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Beans &amp; Okra</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Cabbage &amp; Cauliflower
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Gourd &amp; Drumstick
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Specialty</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div style={{ marginLeft: '32px' }} className="category-title-box">
                                                            <h5 style={{ fontSize: '20' }}>Fresh Fruit</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Banana &amp; Papaya</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Kiwi, Citrus Fruit</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Apples &amp; Pomegranate
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Seasonal Fruits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Mangoes</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Fruit Baskets</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                                                        alt=""
                                                    />
                                                    <h6>Beverages</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(110px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Energy &amp; Soft Drinks</h5>
                                                        </div>
                                                        <ul style={{ transform: 'translate(-30px)' }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Soda &amp; Cocktail Mix
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Soda &amp; Cocktail Mix
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Sports &amp; Energy Drinks
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Non Alcoholic Drinks
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Packaged Water</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Spring Water</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Flavoured Water</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                                                        alt=""
                                                    />
                                                    <h6>Meats &amp; Seafood</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(58px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Meat</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Fresh Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Frozen Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Marinated Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Fresh &amp; Frozen Meat
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Seafood</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Fresh Water Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Dry Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Frozen Fish &amp; Seafood
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Marine Water Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Canned Seafood</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Prawans &amp; Shrimps
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Other Seafood</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                                                        alt=""
                                                    />
                                                    <h6>Breakfast &amp; Dairy</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(55px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Breakfast Cereals</h5>
                                                        </div>
                                                        <ul style={{ transform: 'translate(-30px)' }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Oats &amp; Porridge</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Kids Cereal</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Muesli</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Flakes</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Granola &amp; Cereal Bars
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Instant Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Pasta &amp; Macaroni
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Frozen Non-Veg Snacks
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5 style={{ transform: 'translate(30px)' }}>Dairy</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Milk</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Curd</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Paneer, Tofu &amp; Cream
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Butter &amp; Margarine
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Condensed, Powdered Milk
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Buttermilk &amp; Lassi
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Yogurt &amp; Shrikhand
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Flavoured, Soya Milk
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                                                        alt=""
                                                    />
                                                    <h6>Frozen Foods</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(85px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Noodle, Pasta</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Instant Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Hakka Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Cup Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Vermicelli</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Instant Pasta</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                                                        alt=""
                                                    />
                                                    <h6>Biscuits &amp; Snacks</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(50px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Biscuits &amp; Cookies</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Salted Biscuits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Marie, Health, Digestive
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Cream Biscuits &amp; Wafers
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Glucose &amp; Milk Biscuits
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Cookies</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Bakery Snacks</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Bread Sticks &amp; Lavash
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Cheese &amp; Garlic Bread
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Puffs, Patties, Sandwiches
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Breadcrumbs &amp; Croutons
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink style={{ textDecoration: 'none' }} to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                                                        alt=""
                                                    />
                                                    <h6>Grocery &amp; Staples</h6>
                                                    <AiOutlineRight style={{ fontSize: '15', transform: 'translateX(50px)', color: 'black' }} />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Grocery</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Lemon, Ginger &amp; Garlic
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Indian &amp; Exotic Herbs
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Organic Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Organic Fruits</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Organic Staples</h5>
                                                        </div>
                                                        <ul style={{ transform: "translate(-30px)" }}>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Organic Dry Fruits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Dals &amp; Pulses
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Millet &amp; Flours
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Sugar, Jaggery
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Masalas &amp; Spices
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Rice, Other Rice
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">Organic Flours</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink style={{ textDecoration: 'none' }} to="#">
                                                                    Organic Edible Oil, Ghee
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-nav-middle">
                                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                        <div
                                            className="offcanvas offcanvas-collapse order-xl-2"
                                            id="primaryMenu"
                                        >
                                            <div className="offcanvas-header navbar-shadow">
                                                <h5>Menu</h5>
                                                <button
                                                    className="btn-close lead"
                                                    type="button"
                                                    data-bs-dismiss="offcanvas"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="offcanvas-body">
                                                <ul className="navbar-nav">
                                                    <AntDropdownHome />
                                                    <AntDropdownShop />
                                                    <AntDropdownProduct />

                                                    <li style={{ transform: 'translateX(-40px)' }} className="nav-item dropdown dropdown-mega">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Mega Menu
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-2">
                                                            <div className="row">
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">
                                                                        Daily Vegetables
                                                                    </h5>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Beans &amp; Brinjals
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Broccoli &amp; Cauliflower
                                                                    </NavLink>
                                                                    <NavLink
                                                                        to="/shop-left-sidebar"
                                                                        className="dropdown-item"
                                                                    >
                                                                        Chilies, Garlic
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Vegetables &amp; Salads
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Gourd, Cucumber
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Herbs &amp; Sprouts
                                                                    </NavLink>
                                                                    <NavLink
                                                                        to="/demo-personal-portfolio"
                                                                        className="dropdown-item"
                                                                    >
                                                                        Lettuce &amp; Leafy
                                                                    </NavLink>
                                                                </div>
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Baby Tender</h5>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Beans &amp; Brinjals
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Broccoli &amp; Cauliflower
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Chilies, Garlic
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Vegetables &amp; Salads
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Gourd, Cucumber
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Potatoes &amp; Tomatoes
                                                                    </NavLink>
                                                                    <NavLink
                                                                        to="/shop-left-sidebar"
                                                                        className="dropdown-item"
                                                                    >
                                                                        Peas &amp; Corn
                                                                    </NavLink>
                                                                </div>
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">
                                                                        Exotic Vegetables
                                                                    </h5>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Asparagus &amp; Artichokes
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Avocados &amp; Peppers
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Broccoli &amp; Zucchini
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Celery, Fennel &amp; Leeks
                                                                    </NavLink>
                                                                    <NavLink
                                                                        className="dropdown-item"
                                                                        to="/shop-left-sidebar"
                                                                    >
                                                                        Chilies &amp; Lime
                                                                    </NavLink>
                                                                </div>
                                                                <div className="dropdown-column dropdown-column-img col-3" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <DropdownBlog />
                                                    <li style={{ transform: 'translateX(30px)' }} className="nav-item dropdown new-nav-item">
                                                        <label className="new-dropdown">New</label>
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >

                                                        </NavLink>
                                                        <AntDropdownPages />
                                                        <ul className="dropdown-menu">
                                                            <li className="sub-dropdown-hover">
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Email Template{" "}
                                                                    <span className="new-text">
                                                                        <AiOutlineRight />
                                                                    </span>
                                                                </NavLink>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email">
                                                                            Abandonment
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/email-templete/offer-template">
                                                                            Offer Template
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/email-templete/order-success">
                                                                            Order Success
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/email-templete/reset-password">
                                                                            Reset Password
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/email-templete/welcome">
                                                                            Welcome template
                                                                        </NavLink>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Invoice Template{" "}
                                                                    <span className="new-text">
                                                                        <i className="fa-solid fa-bolt-lightning" />
                                                                    </span>
                                                                </NavLink>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/invoice/invoice-1">
                                                                            Invoice 1
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/invoice/invoice-2">
                                                                            Invoice 2
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/https://themes.pixelstrap.com/fastkart/invoice/invoice-3">
                                                                            Invoice 3
                                                                        </NavLink>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/404">
                                                                    404
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/about-us">
                                                                    About Us
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/cart">
                                                                    Cart
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/contact-us">
                                                                    Contact
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/checkout">
                                                                    Checkout
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/coming-soon"
                                                                >
                                                                    Coming Soon
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/compare">
                                                                    Compare
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/faq">
                                                                    Faq
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/order-success"
                                                                >
                                                                    Order Success
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/order-tracking"
                                                                >
                                                                    Order Tracking
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/otp">
                                                                    OTP
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/search">
                                                                    Search
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/user-dashboard"
                                                                >
                                                                    User Dashboard
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/wishlist">
                                                                    Wishlist
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <AntDropdownSeller />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-nav-right">
                                    <button
                                        className="btn deal-button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deal-box"
                                    >
                                        <FiZap style={{ fontSize: '20' }} />
                                        <span>Deal Today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
            <MobileMenu />
        </>
    )
}
