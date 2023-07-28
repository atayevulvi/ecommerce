/* eslint-disable react/jsx-no-undef */
import qutu from '../../../assets/images/svgler2/product.svg'
import car from '../../../assets/images/svgler2/delivery (1).svg'
import ulduz from '../../../assets/images/svgler2/discount (2).svg'
import hand from '../../../assets/images/svgler2/market (1).svg'
import logo from '../../../assets/images/logo/1.png'
import { Link } from 'react-router-dom'
import {BsTelephone} from 'react-icons/bs'
import {VscHome} from 'react-icons/vsc'
import {HiOutlineMail} from 'react-icons/hi'
import apple from '../../../assets/images/svgler2/Google-Play-Logo-PNG-Photos.png'
import download from '../../../assets/images/svgler2/download.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'
import card from '../../../assets/images/payment/1.png'
export default function Footer() {
    return (
        <>
            <footer className="section-t-space">
                <div className="container-fluid-lg">
                    <div className="service-section">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="service-contain">
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src={qutu}
                                                className="lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5 style={{fontWeight:'300',fontSize:'17px'}}>Every Fresh Products</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src={car}
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5 style={{fontWeight:'300',fontSize:'17px'}}>Free Delivery For Order Over $50</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src={ulduz}
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5 style={{fontWeight:'300',fontSize:'17px'}}>Daily Mega Discounts</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src={hand}
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5 style={{fontWeight:'300',fontSize:'17px'}}>Best Price On The Market</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-footer section-b-space section-t-space">
                        <div className="row g-md-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-logo">
                                    <div className="theme-logo">
                                       <Link to="index">
                                            <img
                                                src={logo}
                                                className=" lazyload"
                                                alt=""
                                            />
                                      </Link>
                                    </div>
                                    <div className="footer-logo-contain">
                                        <p>
                                            We are a friendly bar serving a variety of cocktails, wines
                                            and beers. Our bar is a perfect place for a couple.
                                        </p>
                                        <ul style={{transform:'translate(-35px)'}} className="address">
                                            <li>
                                               <VscHome style={{fontSize:'25px'}}/>
                                               <Link to="">
                                                    1418 Riverwood Drive, CA 96052, US
                                              </Link>
                                            </li>
                                            <li>
                                               <HiOutlineMail style={{fontSize:'18px'}}/>
                                               <Link to="">support@fastkart.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-title">
                                    <h4 style={{fontWeight:'500'}}>Categories</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul style={{transform:'translate(-30px)'}}>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Vegetables &amp; Fruit
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Beverages
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Meats &amp; Seafood
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Frozen Foods
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Biscuits &amp; Snacks
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Grocery &amp; Staples
                                          </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl col-lg-2 col-sm-3">
                                <div className="footer-title">
                                    <h4 style={{fontWeight:'500'}}>Useful Links</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul style={{transform:'translate(-30px)'}}>
                                        <li>
                                           <Link to="index" className="text-content">
                                                Home
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="shop-left-sidebar" className="text-content">
                                                Shop
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="about-us" className="text-content">
                                                About Us
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="blog-list" className="text-content">
                                                Blog
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="contact-us" className="text-content">
                                                Contact Us
                                          </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-3">
                                <div className="footer-title">
                                    <h4 style={{fontWeight:'500'}}>Help Center</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul style={{transform:'translate(-30px)'}}>
                                        <li>
                                           <Link to="order-success" className="text-content">
                                                Your Order
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="user-dashboard" className="text-content">
                                                Your Account
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="order-tracking" className="text-content">
                                                Track Order
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="wishlist" className="text-content">
                                                Your Wishlist
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="search" className="text-content">
                                                Search
                                          </Link>
                                        </li>
                                        <li>
                                           <Link to="faq" className="text-content">
                                                FAQ
                                          </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-title">
                                    <h4 style={{fontWeight:'500'}}>Contact Us</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul style={{transform:'translate(-30px)'}}>
                                        <li>
                                            <div className="footer-number">
                                                <BsTelephone fontSize={'15px'}/>
                                                <div className="contact-number">
                                                    <h6 style={{fontWeight:'400',fontSize:'15px'}} className="text-content">Hotline 24/7 :</h6>
                                                    <h5 style={{fontWeight:'600',fontSize:'15px'}}>+91 888 104 2340</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-number">
                                                <HiOutlineMail style={{fontSize:'20px'}}/>
                                                <div className="contact-number">
                                                    <h6 style={{fontWeight:'400',fontSize:'15px'}} className="text-content">Email Address :</h6>
                                                    <h5 style={{fontWeight:'600',fontSize:'15px'}}>fastkart@hotmail.com</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="social-app">
                                            <h5 style={{fontSize:'17px',fontWeight:'400'}} className="mb-2 text-content">Download App :</h5>
                                            <ul style={{transform:'translate(-30px)'}}>
                                                <li className="mb-0">
                                                    <Link to="https://play.google.com/store/apps"
                                                        target="_blank" rel="noreferrer"
                                                    >
                                                        <img
                                                            src={apple}
                                                            className="lazyload"
                                                            alt=""
                                                        />
                                                  </Link>
                                                </li>
                                                <li className="mb-0">
                                                    <Link to="https://www.apple.com/in/app-store/"
                                                        target="_blank" rel="noreferrer"
                                                    >
                                                        <img width={'50px'} height={'45px'}
                                                            src={download}
                                                            className=" lazyload"
                                                            alt=""
                                                        />
                                                  </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-footer section-small-space">
                        <div className="reserve">
                            <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
                        </div>
                        <div className="payment">
                            <img
                                src={card}
                                className=" lazyload"
                                alt=""
                            />
                        </div>
                        <div className="social-link">
                            <h6 className="text-content">Stay connected :</h6>
                            <ul style={{transform:'translate(-35px,2px)'}}>
                                <li>
                                   <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <BiLogoFacebook color='#4a5568' fontSize={'20px'}/>
                                  </Link>
                                </li>
                                <li>
                                   <Link to="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <BsTwitter color='#4a5568' fontSize={'15px'}/>
                                  </Link>
                                </li>
                                <li>
                                   <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <FiInstagram color='#4a5568' fontSize={'15px'}/>
                                  </Link>
                                </li>
                                <li>
                                   <Link to="https://in.pinterest.com/" target="_blank" rel="noreferrer">
                                        <FaPinterestP color='#4a5568' fontSize={'15px'}/>
                                  </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
