import MobileMenu from "../MobileMenu";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <>
            {/* Loader Start */}
            <div className="fullpage-loader">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            {/* Loader End */}
            {/* Header Start */}
            <header className="pb-md-4 pb-0">
                <div className="header-top">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-3 d-xxl-block d-none">
                                <div className="top-left-header">
                                    <i className="iconly-Location icli text-white" />
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
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button
                                                className="btn dropdown-toggle"
                                                type="button"
                                                id="select-language"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    src="../assets/images/country/united-states.png"
                                                    className="img-fluid blur-up lazyload"
                                                    alt=""
                                                />
                                                <span>English</span>
                                            </button>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="select-language"
                                            >
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="#"
                                                        id="english"
                                                    >
                                                        <img
                                                            src="../assets/images/country/united-kingdom.png"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                        <span>English</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="#"
                                                        id="france"
                                                    >
                                                        <img
                                                            src="../assets/images/country/germany.png"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                        <span>Germany</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="#"
                                                        id="chinese"
                                                    >
                                                        <img
                                                            src="../assets/images/country/turkish.png"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                        <span>Turki</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
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
                                            src="../assets/images/logo/1.png"
                                            className="img-fluid blur-up lazyload"
                                            alt=""
                                        />
                                    </NavLink>
                                    <div className="middle-box">
                                        <div className="location-box">
                                            <button
                                                className="btn location-button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#locationModal"
                                            >
                                                <span className="location-arrow">
                                                    <i data-feather="map-pin" />
                                                </span>
                                                <span className="locat-name">Your Location</span>
                                                <i className="fa-solid fa-angle-down" />
                                            </button>
                                        </div>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="I'm searching for..."
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <button className="btn" type="button" id="button-addon2">
                                                    <i data-feather="search" />
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
                                                    <div className="delivery-icon">
                                                        <i data-feather="phone-call" />
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
                                                    <i data-feather="heart" />
                                                </NavLink>
                                            </li>
                                            <li className="right-side">
                                                <div className="onhover-dropdown header-badge">
                                                    <button
                                                        type="button"
                                                        className="btn p-0 position-relative header-wishlist"
                                                    >
                                                        <i data-feather="shopping-cart" />
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
                                                                            src="../assets/images/vegetable/product/1.png"
                                                                            className="blur-up lazyload"
                                                                            alt=""
                                                                        />
                                                                    </NavLink>
                                                                    <div className="drop-contain">
                                                                        <NavLink to="/product-left-thumbnail">
                                                                            <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                        </NavLink>
                                                                        <h6>
                                                                            <span>1 x</span> $80.58
                                                                        </h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark" />
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
                                                                        <img
                                                                            src="../assets/images/vegetable/product/2.png"
                                                                            className="blur-up lazyload"
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
                                                                            <i className="fa-solid fa-xmark" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="price-box">
                                                            <h5>Total :</h5>
                                                            <h4 className="theme-color fw-bold">$106.58</h4>
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
                                                                Checkout
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side onhover-dropdown">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i data-feather="user" />
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Hello,</h6>
                                                        <h5>My Account</h5>
                                                    </div>
                                                </div>
                                                <div className="onhover-div onhover-div-login">
                                                    <ul className="user-box-name">
                                                        <li className="product-box-contain">
                                                            <i />
                                                            <NavLink to="/sign-in">Log In</NavLink>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <NavLink to="/sign-up">Register</NavLink>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <NavLink to="/forgot">Forgot Password</NavLink>
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
                                        <i data-feather="align-left" />
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
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                                                        alt=""
                                                    />
                                                    <h6>Vegetables &amp; Fruit</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Organic Vegetables</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Potato &amp; Tomato</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Cucumber &amp; Capsicum
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Leafy Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Root Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Beans &amp; Okra</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Cabbage &amp; Cauliflower
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Gourd &amp; Drumstick
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Specialty</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Fresh Fruit</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Banana &amp; Papaya</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Kiwi, Citrus Fruit</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Apples &amp; Pomegranate
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Seasonal Fruits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Mangoes</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Fruit Baskets</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                                                        alt=""
                                                    />
                                                    <h6>Beverages</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Energy &amp; Soft Drinks</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Soda &amp; Cocktail Mix
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Soda &amp; Cocktail Mix
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Sports &amp; Energy Drinks
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Non Alcoholic Drinks
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Packaged Water</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Spring Water</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Flavoured Water</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                                                        alt=""
                                                    />
                                                    <h6>Meats &amp; Seafood</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Meat</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Fresh Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Frozen Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Marinated Meat</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Fresh &amp; Frozen Meat
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Seafood</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Fresh Water Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Dry Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Frozen Fish &amp; Seafood
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Marine Water Fish</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Canned Seafood</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Prawans &amp; Shrimps
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Other Seafood</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                                                        alt=""
                                                    />
                                                    <h6>Breakfast &amp; Dairy</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Breakfast Cereals</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Oats &amp; Porridge</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Kids Cereal</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Muesli</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Flakes</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Granola &amp; Cereal Bars
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Instant Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Pasta &amp; Macaroni
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Frozen Non-Veg Snacks
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Dairy</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Milk</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Curd</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Paneer, Tofu &amp; Cream
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Butter &amp; Margarine
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Condensed, Powdered Milk
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Buttermilk &amp; Lassi
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Yogurt &amp; Shrikhand
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Flavoured, Soya Milk
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                                                        alt=""
                                                    />
                                                    <h6>Frozen Foods</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Noodle, Pasta</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Instant Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Hakka Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Cup Noodles</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Vermicelli</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Instant Pasta</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                                                        alt=""
                                                    />
                                                    <h6>Biscuits &amp; Snacks</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Biscuits &amp; Cookies</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Salted Biscuits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Marie, Health, Digestive
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Cream Biscuits &amp; Wafers
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Glucose &amp; Milk Biscuits
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Cookies</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Bakery Snacks</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Bread Sticks &amp; Lavash
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Cheese &amp; Garlic Bread
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Puffs, Patties, Sandwiches
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Breadcrumbs &amp; Croutons
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-category-list">
                                                <NavLink to="#" className="category-name">
                                                    <img
                                                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                                                        alt=""
                                                    />
                                                    <h6>Grocery &amp; Staples</h6>
                                                    <i className="fa-solid fa-angle-right" />
                                                </NavLink>
                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Grocery</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Lemon, Ginger &amp; Garlic
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Indian &amp; Exotic Herbs
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Organic Vegetables</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Organic Fruits</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Organic Staples</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="#">Organic Dry Fruits</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Organic Dals &amp; Pulses
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Organic Millet &amp; Flours
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Organic Sugar, Jaggery
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Organic Masalas &amp; Spices
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
                                                                    Organic Rice, Other Rice
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">Organic Flours</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="#">
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
                                                    <li className="nav-item dropdown">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Home
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index">
                                                                    Kartshop
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-2">
                                                                    Sweetshop
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-3">
                                                                    Organic
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-4">
                                                                    Supershop
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-5">
                                                                    Classic shop
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-6">
                                                                    Furniture
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-7">
                                                                    Search Oriented
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-8">
                                                                    Category Focus
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/index-9">
                                                                    Fashion
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Shop
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-category-slider"
                                                                >
                                                                    Shop Category Slider
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-category"
                                                                >
                                                                    Shop Category Sidebar
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-banner"
                                                                >
                                                                    Shop Banner
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-left-sidebar"
                                                                >
                                                                    Shop Left Sidebar
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/shop-list">
                                                                    Shop List
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-right-sidebar"
                                                                >
                                                                    Shop Right Sidebar
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/shop-top-filter"
                                                                >
                                                                    Shop Top Filter
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Product
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/product-4-image"
                                                                >
                                                                    Product 4 Image
                                                                </NavLink>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <NavLink
                                                                    to="#"
                                                                    className="dropdown-item"
                                                                >
                                                                    Product Thumbnail
                                                                </NavLink>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <NavLink to="/product-left-thumbnail">
                                                                            Left Thumbnail
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/product-right-thumbnail">
                                                                            Right Thumbnail
                                                                        </NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink to="/product-bottom-thumbnail">
                                                                            Bottom Thumbnail
                                                                        </NavLink>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/product-bundle"
                                                                    className="dropdown-item"
                                                                >
                                                                    Product Bundle
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/product-slider"
                                                                    className="dropdown-item"
                                                                >
                                                                    Product Slider
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/product-sticky"
                                                                    className="dropdown-item"
                                                                >
                                                                    Product Sticky
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown dropdown-mega">
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
                                                    <li className="nav-item dropdown">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Blog
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/blog-detail"
                                                                >
                                                                    Blog Detail
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/blog-grid">
                                                                    Blog Grid
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink className="dropdown-item" to="/blog-list">
                                                                    Blog List
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown new-nav-item">
                                                        <label className="new-dropdown">New</label>
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Pages
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li className="sub-dropdown-hover">
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Email Template{" "}
                                                                    <span className="new-text">
                                                                        <i className="fa-solid fa-bolt-lightning" />
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
                                                                <NavLink className="dropdown-item" to="/search">
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
                                                    <li className="nav-item dropdown">
                                                        <NavLink
                                                            className="nav-link dropdown-toggle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            Seller
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-become"
                                                                >
                                                                    Become a Seller
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-dashboard"
                                                                >
                                                                    Seller Dashboard
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-detail"
                                                                >
                                                                    Seller Detail
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-detail-2"
                                                                >
                                                                    Seller Detail 2
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-grid"
                                                                >
                                                                    Seller Grid
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="dropdown-item"
                                                                    to="/seller-grid-2"
                                                                >
                                                                    Seller Grid 2
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
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
                                        <i data-feather="zap" />
                                        <span>Deal Today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
            <MobileMenu/>
        </>
    )
}
